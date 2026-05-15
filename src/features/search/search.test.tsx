import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import { Search } from './search';

function renderSearch(value: string, onChange: () => void) {
  return render(<Search value={value} onChange={onChange} />);
}

describe('search', () => {
  test('calls onChange when typing', async () => {
    const handleChange = vi.fn();
    renderSearch('', handleChange);

    const input = screen.getByPlaceholderText('Search players...');
    await userEvent.type(input, 'a');

    expect(handleChange).toHaveBeenCalled();
  });

  test('displays the provided value', () => {
    renderSearch('test query', vi.fn());

    const input = screen.getByPlaceholderText('Search players...');
    expect(input).toHaveValue('test query');
  });
});
