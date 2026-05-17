import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePlayers } from './use-players';
import { responseMock } from '../../../shared/mocks/response-mock';
import type { ReactNode } from 'react';

const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,
        gcTime: 0,
      },
    },
  });

  return function Wrapper({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };
}

describe('usePlayers', () => {
  let wrapper: ReturnType<typeof createWrapper>;

  beforeEach(() => {
    wrapper = createWrapper();
    mockFetch.mockClear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return empty players array initially while loading', () => {
    mockFetch.mockImplementation(() => new Promise(() => {}));

    const { result } = renderHook(() => usePlayers(), { wrapper });

    expect(result.current.players).toEqual([]);
    expect(result.current.isPending).toBe(true);
    expect(result.current.isError).toBe(false);
  });

  it('should return players after successful fetch', async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(responseMock),
    });

    const { result } = renderHook(() => usePlayers(), { wrapper });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.players).toEqual(responseMock.items);
    expect(result.current.players).toHaveLength(2);
    expect(result.current.isError).toBe(false);
    expect(result.current.players[1].firstName).toBe('Alexia');
  });

  it('should handle fetch error gracefully', async () => {
    mockFetch.mockRejectedValueOnce(new Error('API Error'));

    const { result } = renderHook(() => usePlayers(), { wrapper });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.players).toEqual([]);
    expect(result.current.isPending).toBe(false);
  });

  it('should correctly determine hasNextPage based on totalItems', async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(responseMock),
    });

    const { result } = renderHook(() => usePlayers(), { wrapper });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.hasNextPage).toBe(true);
  });

  it('should not have next page when all items are fetched', async () => {
    const completeResponseMock = {
      items: responseMock.items,
      totalItems: 2,
    };

    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(completeResponseMock),
    });

    const { result } = renderHook(() => usePlayers(), { wrapper });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.hasNextPage).toBe(false);
  });

  it('should call fetch with correct URL parameters', async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(responseMock),
    });

    renderHook(() => usePlayers(), { wrapper });

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    expect(mockFetch).toHaveBeenCalledWith('/api/rating/ea-sports-fc?locale=en&limit=30&offset=0');
  });

  it('should handle multiple pages correctly', async () => {
    mockFetch
      .mockResolvedValueOnce({
        json: () => Promise.resolve(responseMock),
      })

      .mockResolvedValueOnce({
        json: () =>
          Promise.resolve({
            items: [responseMock.items[0]],
            totalItems: 17_873,
          }),
      });

    const { result } = renderHook(() => usePlayers(), { wrapper });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.players).toHaveLength(2);
    expect(result.current.hasNextPage).toBe(true);

    if (result.current.fetchNextPage) {
      await result.current.fetchNextPage();
    }

    await waitFor(() => {
      expect(result.current.players).toHaveLength(3);
    });

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      '/api/rating/ea-sports-fc?locale=en&limit=30&offset=30'
    );
  });
});
