import { MatchData } from "../types/MatchData";

const fixture5: MatchData = {
  scheduled_start_at: "2023-09-23T14:00:00Z",
  actual_start_at: "",
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
    scores: [],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Mr. J.",
        last_name: "Boyle",
      },
    ],
    scores: [],
  },
};

export default fixture5;
