import { useQuery } from '@tanstack/react-query';
import type { EaApiResponse } from '../../../shared/model/types.ts';

export const usePlayers = () => {
  const { data, isPending, isError, refetch } = useQuery<EaApiResponse>({
    queryKey: ['players'],
    queryFn: () =>
      fetch('https://drop-api.ea.com/rating/ea-sports-fc?locale=en&limit=30').then((res) =>
        res.json()
      ),
  });

  return {
    players: data?.items || [],
    isPending,
    isError,
    refetch,
  };
};
