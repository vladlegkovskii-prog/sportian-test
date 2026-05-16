import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000,
      networkMode: 'offlineFirst',
      refetchOnWindowFocus: false,
    },
  },
});
