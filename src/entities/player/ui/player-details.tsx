import { Box, Typography, Stack, Divider, Paper, Container, Grid } from '@mui/material';
import { calculateAge } from '../../../shared/lib/calculate-age.ts';
import { getFootLabel } from '../../../shared/lib/get-foot-label.ts';
import type { Player } from '../model/types.ts';

type PlayerDetailsProps = {
  player: Player;
};

function PlayerDetails(props: PlayerDetailsProps) {
  const { player } = props;
  const coreAttributes = [
    { label: 'PACE', value: player.stats.pac.value },
    { label: 'SHOOTING', value: player.stats.sho.value },
    { label: 'PASSING', value: player.stats.pas.value },
    { label: 'DRIBBLING', value: player.stats.dri.value },
    { label: 'DEFENDING', value: player.stats.def.value },
    { label: 'PHYSICALITY', value: player.stats.phy.value },
  ];

  return (
    <Paper>
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <Stack spacing={1} sx={{ mb: 4, alignItems: 'center' }}>
          <Box
            component="img"
            src={player.avatarUrl}
            alt={player.lastName}
            sx={{ width: 240, height: 240 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            {player.firstName} {player.lastName}
          </Typography>
          <Stack direction="row" spacing={2} divider={<Typography color="divider">•</Typography>}>
            <Typography sx={{ color: 'primary.main' }}>{player.position.shortLabel}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {calculateAge(player.birthdate)}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{player.height} CM</Typography>
          </Stack>
        </Stack>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5">Core Attributes</Typography>
          <Grid container spacing={1.5}>
            {coreAttributes.map((attr) => (
              <Grid key={attr.label} size={{ xs: 4 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    textAlign: 'center',
                    py: 2,
                  }}
                >
                  <Typography variant="caption">{attr.label}</Typography>
                  <Typography variant="h4">{attr.value}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h5">Physical Metrics</Typography>
          <Divider />
          <Stack sx={{ py: 2 }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Typography color="text.secondary">Preferred Foot</Typography>
              <Typography>{getFootLabel(player.preferredFoot)}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Paper>
  );
}

PlayerDetails.displayName = 'PlayerDetails';
export { PlayerDetails };
