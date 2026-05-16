import { Box, Container, Grid } from '@mui/material';
import { useMemo } from 'react';
import { usePlayers } from '../entities/player/api/use-players.ts';
import type { Player } from '../entities/player/model/types.ts';
import { NoPlayersFound } from '../entities/player/ui/no-players-found.tsx';
import { PlayerCard } from '../entities/player/ui/player-card.tsx';
import { PlayersSearchError } from '../entities/player/ui/players-search-error.tsx';
import { PlayersSkeleton } from '../entities/player/ui/players-skeleton.tsx';
import { useSearch } from '../features/search/model/search-context.tsx';
import { ViewPlayerDetails } from '../features/view-player-details/ui/view-player-details.tsx';
import { InfiniteScrollGuard } from '../shared/ui/infinite-scroll-guard.tsx';

function PlayerList() {
  const { value, onChange } = useSearch();
  const { players, isPending, isError, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePlayers();

  const handlePlayerSearchReset = () => {
    onChange('');
  };

  const filteredPlayers = useMemo(() => {
    if (value === '') {
      return players;
    }
    return players.filter((player) => {
      const fullName = `${player.firstName} ${player.lastName}`.toLowerCase();
      return fullName.includes(value.toLowerCase());
    });
  }, [players, value]);

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
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container spacing={3}>
        {filteredPlayers.map((player: Player) => (
          <Grid
            key={player.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <ViewPlayerDetails player={player}>
              <PlayerCard player={player} />
            </ViewPlayerDetails>
          </Grid>
        ))}
      </Grid>
      <InfiniteScrollGuard
        onIntersect={fetchNextPage}
        enabled={hasNextPage && !isFetchingNextPage && !value}
      />
    </Container>
  );
}

export { PlayerList };
