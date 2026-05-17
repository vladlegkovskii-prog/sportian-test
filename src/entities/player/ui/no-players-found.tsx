import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface NoPlayersFoundProps {
  onClick: () => void;
}

function NoPlayersFound(props: NoPlayersFoundProps) {
  const { onClick } = props;
  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 6,
          textAlign: 'center',
        }}
      >
        <Stack spacing={3}>
          <Box>
            <SearchOffIcon />
          </Box>
          <Box>
            <Typography variant="h5">No players found</Typography>
            <Typography variant="body2" color="text.secondary">
              Adjust your scouting filters or search criteria to view available roster prospects.
            </Typography>
          </Box>
          <Button variant="contained" color="primary" onClick={onClick}>
            CLEAR FILTERS
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

NoPlayersFound.displayName = 'NoPlayersFound';
export { NoPlayersFound };
