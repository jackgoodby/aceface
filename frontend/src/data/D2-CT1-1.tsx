import { MatchData } from "../types/MatchData";

const fixture9: MatchData = {
  scheduled_start_at: "2023-09-24T12:00:00Z",
  actual_start_at: "",
  ended_at: "",
  court: "1",
  tournament_name: "Men's Singles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. F.",
        last_name: "Cook",
        seed: 1,
      },
    ],
    scores: [],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. J.",
        last_name: "Hart",
        seed: 2,
      },
    ],
    scores: [],
  },
};

export default fixture9;
