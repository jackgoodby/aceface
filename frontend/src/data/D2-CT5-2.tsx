import { MatchData } from "../types/MatchData";

const fixture13: MatchData = {
  scheduled_start_at: "2023-09-24T14:00:00Z",
  actual_start_at: "2023-09-24T13:30:00Z",
  ended_at: "",
  court: "5",
  tournament_name: "Ladies' Singles Plate Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. H.",
        last_name: "Carter",
      },
    ],
    scores: [6, 5],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. L.",
        last_name: "Millinson",
      },
    ],
    scores: [2, 3],
  },
};

export default fixture13;
