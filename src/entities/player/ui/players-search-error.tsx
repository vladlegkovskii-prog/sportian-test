import { Alert, AlertTitle, Button, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

type PlayersSearchErrorProps = {
  onClick: () => void;
};

function PlayersSearchError(props: PlayersSearchErrorProps) {
  const { onClick } = props;
  return (
    <Box>
      <Alert
        severity="error"
        variant="outlined"
        icon={<ErrorIcon fontSize="inherit" />}
        action={
          <Button variant="outlined" color="inherit" size="small" onClick={onClick}>
            RETRY
          </Button>
        }
      >
        <AlertTitle>Data Retrieval Failed</AlertTitle>
        Error loading players. Ensure you have a stable connection to the scouting database.
      </Alert>
    </Box>
  );
}

export { PlayersSearchError };
