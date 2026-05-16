import { Box, Typography, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { calculateAge } from '../../../shared/utils/calculate-age.ts';
import type { Player } from '../model/types.ts';

type PlayerCardProps = {
  player: Player;
};

export function PlayerCard(props: PlayerCardProps) {
  const { player } = props;
  const age = calculateAge(player.birthdate);

  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box sx={{ bgcolor: 'primary.main', width: 120 }}>
        <CardMedia
          component="img"
          image={player.avatarUrl}
          alt={`${player.firstName} ${player.lastName}`}
          sx={{ height: '100%', objectFit: 'cover' }}
        />
      </Box>

      <CardContent sx={{ flex: 1, py: 1 }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Stack sx={{ flex: 1 }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {player.commonName || `${player.firstName} ${player.lastName}`}
              </Typography>
              <Box
                sx={{
                  px: 1.5,
                  py: 0.5,
                }}
              >
                <Typography variant="h5">{player.overallRating}</Typography>
                <Typography variant="caption">OVR</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography sx={{ bgcolor: 'background.default' }}>
                {player.position.shortLabel}
              </Typography>
              <Typography color="text.secondary">
                {age} • {player.height}cm
              </Typography>
            </Stack>
            <Typography variant="caption">{player.team.label}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
