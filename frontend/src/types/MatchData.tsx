import { MatchTeamData } from "./MatchTeamData";

export interface MatchData {
  scheduled_start_at: string;
  actual_start_at?: string;
  ended_at?: string;
  court: string;
  tournament_name: string;
  team_a: MatchTeamData;
  team_b: MatchTeamData;
}
