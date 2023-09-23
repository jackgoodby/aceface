import { MatchData } from "../types/MatchData";

const fixture3: MatchData = {
  scheduled_start_at: "2023-09-23T16:00:00Z",
  actual_start_at: "",
  ended_at: "",
  court: "1",
  tournament_name: "Men's Over 60s Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. D.",
        last_name: "McEwan",
      },
      {
        title: "Mr. T.",
        last_name: "Powell",
      },
    ],
    scores: [],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Mr. M.",
        last_name: "Hammond",
        seed: 1,
      },
      {
        title: "Mr. M.",
        last_name: "Clinton",
        seed: 1,
      },
    ],
    scores: [],
  },
};

export default fixture3;
