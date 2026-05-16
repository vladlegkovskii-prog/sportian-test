import { Box, CircularProgress } from '@mui/material';
import { useEffect, useRef } from 'react';

type InfiniteScrollGruardProps = {
  enabled: boolean;
  onIntersect: () => void;
};

function InfiniteScrollGuard(props: InfiniteScrollGruardProps) {
  const { enabled, onIntersect } = props;
  const guardComponent = useRef(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.1 }
    );

    if (guardComponent.current) {
      observer.observe(guardComponent.current);
    }

    return () => observer.disconnect();
  }, [enabled, onIntersect]);

  return (
    <Box
      className="vlad-hello"
      ref={guardComponent}
      sx={{ display: 'flex', justifyContent: 'center', py: 3, width: '100%' }}
    >
      {enabled && <CircularProgress color="primary" size={60} thickness={4} />}
    </Box>
  );
}

export { InfiniteScrollGuard };
