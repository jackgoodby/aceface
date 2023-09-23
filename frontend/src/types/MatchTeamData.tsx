import { PlayerData } from "./PlayerData";
export interface MatchTeamData {
  id: string;
  players: [PlayerData, PlayerData?];
  scores: [number?, number?, number?];
}
