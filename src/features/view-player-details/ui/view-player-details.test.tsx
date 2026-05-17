import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import { ViewPlayerDetails } from './view-player-details';
import { playerMock } from '../../../shared/mocks/player-mock';

vi.mock('../../../entities/player/ui/player-details', () => ({
  PlayerDetails: vi.fn(() => <div data-testid="player-details">Player Details</div>),
}));

function renderViewPlayerDetails() {
  return render(
    <ViewPlayerDetails player={playerMock}>
      <button>View Details</button>
    </ViewPlayerDetails>
  );
}

describe('view player details', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('opens modal when clicking the trigger element', async () => {
    renderViewPlayerDetails();

    const triggerButton = screen.getByText('View Details');
    await userEvent.click(triggerButton);

    expect(screen.getByTestId('player-details')).toBeInTheDocument();
  });

  test('closes modal when clicking the close button', async () => {
    renderViewPlayerDetails();

    const triggerButton = screen.getByText('View Details');
    await userEvent.click(triggerButton);
    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);

    expect(screen.queryByTestId('player-details')).not.toBeInTheDocument();
  });
});
