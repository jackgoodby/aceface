import { MatchData } from "../types/MatchData";

const fixture12: MatchData = {
  scheduled_start_at: "2023-09-24T12:00:00Z",
  actual_start_at: "",
  ended_at: "",
  court: "5",
  tournament_name: "Veteran Ladies' Singles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. J.",
        last_name: "Brayshay",
        seed: 2,
      },
    ],
    scores: [],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. J.",
        last_name: "Skym",
        seed: 1,
      },
    ],
    scores: [],
  },
};

export default fixture12;
