import { PlayerData } from "./PlayerData";
export interface TeamData {
  id?: string;
  sort_key?: string;
  seed?: number;
  player1?: PlayerData;
  player2?: PlayerData;
}
