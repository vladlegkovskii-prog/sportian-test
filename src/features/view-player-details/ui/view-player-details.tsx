import { useState, type ReactNode } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { Player } from '../../../entities/player/model/types.ts';
import { PlayerDetails } from '../../../entities/player/ui/player-details.tsx';

type ViewPlayerDetailsProps = {
  player: Player;
  children: ReactNode;
};

function ViewPlayerDetails(props: ViewPlayerDetailsProps) {
  const { player, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Box component="div" onClick={handleOpen} sx={{ display: 'contents', cursor: 'pointer' }}>
        {children}
      </Box>
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 24,
              right: 32,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <PlayerDetails player={player} />
        </Box>
      </Modal>
    </>
  );
}

export { ViewPlayerDetails };
