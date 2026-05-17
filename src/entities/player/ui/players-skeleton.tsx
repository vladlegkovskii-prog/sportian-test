import { Box, Paper, Stack, Skeleton, CircularProgress, Typography } from '@mui/material';

function PlayersSkeleton() {
  const skeletons = [1, 2, 3];

  return (
    <Box sx={{ position: 'relative', width: '100%', py: 4 }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <CircularProgress color="primary" size={60} thickness={4} />
        <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>
          LOADING PLAYERS...
        </Typography>
      </Box>
      <Box sx={{ opacity: 0.4 }}>
        <Stack spacing={2}>
          {skeletons.map((item) => (
            <Paper
              key={item}
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Skeleton variant="rectangular" width={120} height={100} />
              <Box sx={{ flex: 1, p: 2 }}>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
                      <Skeleton variant="text" width={150} height={32} />
                      <Skeleton variant="text" width={30} height={24} />
                    </Stack>
                    <Skeleton variant="text" width={40} height={32} />
                  </Stack>
                  <Skeleton variant="text" width={100} height={20} />
                  <Skeleton variant="text" width={120} height={16} />
                </Stack>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

PlayersSkeleton.displayName = 'PlayersSkeleton';
export { PlayersSkeleton };
