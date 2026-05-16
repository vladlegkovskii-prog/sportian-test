import { Box, Paper, Stack, Skeleton, CircularProgress, Typography, Grid } from '@mui/material';

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
        <Grid component="article" container spacing={3} sx={{ justifyContent: 'center' }}>
          {skeletons.map((item) => (
            <Grid key={item} size={{ xs: 12, sm: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: (theme) => `${theme.shape.borderRadius}px`,
                  bgcolor: 'background.paper',
                }}
              >
                <Stack spacing={2}>
                  <Skeleton variant="rounded" height={200} sx={{ bgcolor: '#F5F5F5' }} />
                  <Box>
                    <Skeleton variant="text" width="80%" height={32} />
                    <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                      <Box sx={{ width: '40%' }}>
                        <Skeleton variant="text" width="30%" />
                        <Skeleton variant="text" width="100%" height={24} />
                      </Box>
                      <Box sx={{ width: '40%' }}>
                        <Skeleton variant="text" width="30%" />
                        <Skeleton variant="text" width="100%" height={24} />
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export { PlayersSkeleton };
