import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchProvider, useSearch } from './search-context';

function ConsumerComponent() {
  const { value, onChange } = useSearch();
  return (
    <div>
      <p data-testid="search-value">{value}</p>
      <button onClick={() => onChange('sportian')}>Change Value</button>
    </div>
  );
}

describe('search context', () => {
  it('should provide default state and update when onChange is called', async () => {
    render(
      <SearchProvider>
        <ConsumerComponent />
      </SearchProvider>
    );
    const text = screen.getByTestId('search-value');
    const button = screen.getByRole('button', { name: /change value/i });
    expect(text.textContent).toBe('');
    await userEvent.click(button);
    expect(text.textContent).toBe('sportian');
  });

  it('should throw an error when used outside of SearchProvider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<ConsumerComponent />)).toThrow(
      'useSearch must be used within a SearchProvider'
    );
    consoleSpy.mockRestore();
  });
});
