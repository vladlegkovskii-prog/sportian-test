import type { Player } from '../../entities/player/model/types.ts';

export interface EaApiResponse {
  items: Player[];
  totalItems: number;
}
