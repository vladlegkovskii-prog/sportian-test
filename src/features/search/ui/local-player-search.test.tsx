import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import { LocalPlayerSearch } from './local-player-search';
import { useSearch } from '../model/search-context.tsx';

vi.mock('../model/search-context', () => ({
  useSearch: vi.fn(),
}));

function renderLocalPlayerSearch() {
  return render(<LocalPlayerSearch />);
}

describe('local player search', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('calls onChange when typing', async () => {
    const handleChange = vi.fn();
    vi.mocked(useSearch).mockReturnValue({
      value: '',
      onChange: handleChange,
    });

    renderLocalPlayerSearch();

    const input = screen.getByPlaceholderText('Local player search...');
    await userEvent.type(input, 'a');

    expect(handleChange).toHaveBeenCalled();
  });

  test('displays the provided value', () => {
    vi.mocked(useSearch).mockReturnValue({
      value: 'test query',
      onChange: vi.fn(),
    });

    renderLocalPlayerSearch();

    const input = screen.getByPlaceholderText('Local player search...');
    expect(input).toHaveValue('test query');
  });
});
