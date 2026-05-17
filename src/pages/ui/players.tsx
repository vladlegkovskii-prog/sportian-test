import { Box } from '@mui/material';
import { SearchProvider } from '../../features/search/model/search-context.tsx';
import { PlayerList } from '../../widgets/player-list.tsx';
import { TopBar } from '../../widgets/top-bar.tsx';

function Players() {
  return (
    <SearchProvider>
      <TopBar />
      <Box component="center">
        <PlayerList />
      </Box>
    </SearchProvider>
  );
}

Players.displayName = 'Players';
export { Players };
