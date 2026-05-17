import { useInfiniteQuery } from '@tanstack/react-query';
import type { EaApiResponse } from '../../../shared/model/types.ts';
import type { Player } from '../model/types.ts';

const LIMIT = 30;

const fetchPlayers = async ({ pageParam }: { pageParam: number }): Promise<EaApiResponse> => {
  const response = await fetch(
    `https://drop-api.ea.com/rating/ea-sports-fc?locale=en&limit=30&offset=${pageParam}`
  );

  return response.json();
};

function usePlayers() {
  const { data, isPending, isError, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['players'],
      queryFn: fetchPlayers,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        const nextOffset = lastPageParam + LIMIT;
        if (nextOffset >= lastPage.totalItems) {
          return;
        }
        return nextOffset;
      },
    });

  const players: Player[] = [];
  if (data?.pages) {
    for (let i = 0; i < data.pages.length; i++) {
      for (let j = 0; j < data.pages[i].items.length; j++) {
        players.push(data.pages[i].items[j]);
      }
    }
  }

  return {
    players,
    isPending,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}

export { usePlayers };
