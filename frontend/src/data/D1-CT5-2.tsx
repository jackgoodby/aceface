import { MatchData } from "../types/MatchData";

const fixture5: MatchData = {
  scheduled_start_at: "2023-09-23T14:00:00Z",
  actual_start_at: "2023-09-23T14:12:00Z",
  ended_at: "",
  court: "5",
  tournament_name: "Veteran Men's Singles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. D.",
        last_name: "Homer",
      },
    ],
    scores: [4, 1],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Mr. J.",
        last_name: "Boyle",
        seed: 3,
      },
    ],
    scores: [6, 2],
  },
};

export default fixture5;
