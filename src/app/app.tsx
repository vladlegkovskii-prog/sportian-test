import { NoPlayersFound } from '../entities/player/ui/no-players-found.tsx';
import { PlayerCard } from '../entities/player/ui/player-card.tsx';
import { PlayerDetails } from '../entities/player/ui/player-details.tsx';
import { PlayerError } from '../entities/player/ui/players-search-error.tsx';
import { PlayersSkeleton } from '../entities/player/ui/players-skeleton.tsx';
import { playerMock } from '../shared/mocks/player-mock.ts';
import { TopBar } from '../widgets/top-bar.tsx';

function App() {
  return (
    <div>
      <TopBar />
      <PlayersSkeleton />
      <PlayerError onClick={() => console.log('click')} />
      <NoPlayersFound onClick={() => console.log('click')} />
      <PlayerCard player={playerMock} />
      <PlayerDetails player={playerMock} />
    </div>
  );
}

export { App };
