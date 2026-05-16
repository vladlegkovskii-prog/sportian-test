import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 120_000,
      networkMode: 'offlineFirst',
      refetchOnWindowFocus: false,
    },
  },
});
