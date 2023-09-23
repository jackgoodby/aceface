import { PlayerData } from "./PlayerData";
export interface TeamData {
  id?: string;
  sort_key?: string;
  seed?: number;
  players: [PlayerData, PlayerData?];
}
