import { Box, Typography, Card, CardContent, CardMedia, Stack, Divider } from '@mui/material';
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
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 320,
      }}
    >
      <Box sx={{ position: 'relative', bgcolor: 'primary.main' }}>
        <CardMedia
          component="img"
          image={player.avatarUrl}
          alt={`${player.firstName} ${player.lastName}`}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 1,
            px: 1.5,
            py: 0.5,
            textAlign: 'center',
            minWidth: 48,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 900, lineHeight: 1 }}>
            {player.overallRating}
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: 700, display: 'block' }}>
            OVR
          </Typography>
        </Box>
      </Box>

      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              {player.commonName || `${player.firstName} ${player.lastName}`}
            </Typography>
            <Typography>{player.position.shortLabel}</Typography>
          </Stack>
          <Typography color="text.secondary">
            {age} yrs • {player.height} cm
          </Typography>
          <Divider />
          <Stack direction="row">
            <Typography variant="caption">{player.team.label}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
