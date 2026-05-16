import { Box, Typography, Stack } from '@mui/material';
import { LocalPlayerSearch } from '../features/search/ui/local-player-search';

function TopBar() {
  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: 2,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Stack
        component="div"
        spacing={2}
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          ELITE SCOUT
        </Typography>

        <Box sx={{ width: 300 }}>
          <LocalPlayerSearch />
        </Box>
      </Stack>
    </Box>
  );
}

export { TopBar };
