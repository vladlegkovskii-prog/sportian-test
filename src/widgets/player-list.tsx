import { useMemo, useRef } from 'react';
import { Box, List, ListItem } from '@mui/material';
import { useVirtualizer } from '@tanstack/react-virtual';
import { usePlayers } from '../entities/player/api/use-players.ts';
import { NoPlayersFound } from '../entities/player/ui/no-players-found.tsx';
import { PlayerCard } from '../entities/player/ui/player-card.tsx';
import { PlayersSearchError } from '../entities/player/ui/players-search-error.tsx';
import { PlayersSkeleton } from '../entities/player/ui/players-skeleton.tsx';
import { useSearch } from '../features/search/model/search-context.tsx';
import { ViewPlayerDetails } from '../features/view-player-details/ui/view-player-details.tsx';
import { InfiniteScrollGuard } from '../shared/ui/infinite-scroll-guard.tsx';

function PlayerList() {
  const scrollReference = useRef<HTMLDivElement>(null);
  const { value, onChange } = useSearch();
  const { players, isPending, isError, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePlayers();

  const filteredPlayers = useMemo(() => {
    if (value === '') {
      return players;
    }
    return players.filter((player) => {
      const fullName = `${player.firstName} ${player.lastName}`.toLowerCase();
      return fullName.includes(value.toLowerCase());
    });
  }, [players, value]);

  const virtualiser = useVirtualizer({
    count: filteredPlayers.length,
    estimateSize: () => 164,
    getScrollElement: () => scrollReference.current,
  });

  const virtualisedPlayers = virtualiser.getVirtualItems();

  const handlePlayerSearchReset = () => {
    onChange('');
  };

  if (isPending) {
    return (
      <Box component="center" sx={{ p: 4 }}>
        <PlayersSkeleton />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box component="center" sx={{ p: 4, width: 500 }}>
        <PlayersSearchError onClick={refetch} />
      </Box>
    );
  }

  if (value !== '' && filteredPlayers.length === 0) {
    return (
      <Box component="center" sx={{ p: 4 }}>
        <NoPlayersFound onClick={handlePlayerSearchReset} />
      </Box>
    );
  }

  return (
    <Box
      sx={{ p: 4, height: '90vh', overflowY: 'auto', width: '100%', position: 'relative' }}
      ref={scrollReference}
    >
      <List
        sx={{
          height: `${virtualiser.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualisedPlayers.map((virtualItem) => {
          const player = filteredPlayers[virtualItem.index];
          return (
            <ListItem
              key={virtualItem.key}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <ViewPlayerDetails player={player}>
                <PlayerCard player={player} />
              </ViewPlayerDetails>
            </ListItem>
          );
        })}
      </List>
      <InfiniteScrollGuard
        onIntersect={fetchNextPage}
        enabled={hasNextPage && !isFetchingNextPage && !value}
      />
    </Box>
  );
}

PlayerList.displayName = 'PlayerList';
export { PlayerList };
