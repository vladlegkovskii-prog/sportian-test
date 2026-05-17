import type { Player } from '../../entities/player/model/types.ts';

function getFootLabel(foot: Player['preferredFoot']): string {
  return foot === 1 ? 'Right' : 'Left';
}

export { getFootLabel };
