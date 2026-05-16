interface BaseMetadata {
  id: string | number;
  label: string;
}

interface VisualMetadata extends BaseMetadata {
  imageUrl: string;
}

export interface AlternatePosition extends BaseMetadata {
  shortLabel: string;
}

export interface PlayerAbility extends VisualMetadata {
  description: string;
  type: BaseMetadata;
}

export interface Team extends VisualMetadata {
  isPopular: boolean;
}

export interface Position extends BaseMetadata {
  shortLabel: string;
  positionType: { id: string; name: string };
}

export interface StatValue {
  value: number;
  diff: number;
}

type StatKeys =
  | 'acceleration'
  | 'agility'
  | 'jumping'
  | 'stamina'
  | 'strength'
  | 'aggression'
  | 'balance'
  | 'ballControl'
  | 'composure'
  | 'crossing'
  | 'curve'
  | 'def'
  | 'defensiveAwareness'
  | 'dri'
  | 'dribbling'
  | 'finishing'
  | 'freeKickAccuracy'
  | 'gkDiving'
  | 'gkHandling'
  | 'gkKicking'
  | 'gkPositioning'
  | 'gkReflexes'
  | 'headingAccuracy'
  | 'interceptions'
  | 'longPassing'
  | 'longShots'
  | 'pac'
  | 'pas'
  | 'penalties'
  | 'phy'
  | 'positioning'
  | 'reactions'
  | 'sho'
  | 'shortPassing'
  | 'shotPower'
  | 'slidingTackle'
  | 'sprintSpeed'
  | 'standingTackle'
  | 'vision'
  | 'volleys';

export type Stats = Record<StatKeys, StatValue>;

export interface Player {
  id: number;
  rank: number;
  overallRating: number;
  firstName: string;
  lastName: string;
  commonName: string | undefined;
  birthdate: string;
  height: number;
  weight: number;
  skillMoves: number;
  weakFootAbility: number;
  preferredFoot: number;
  leagueName: string;
  avatarUrl: string;
  shieldUrl: string;
  alternatePositions: AlternatePosition[];
  playerAbilities: PlayerAbility[];
  gender: BaseMetadata;
  nationality: VisualMetadata;
  team: Team;
  position: Position;
  stats: Stats;
}
