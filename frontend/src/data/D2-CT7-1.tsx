import { MatchData } from "../types/MatchData";

const fixture14: MatchData = {
  scheduled_start_at: "2023-09-24T12:00:00Z",
  actual_start_at: "",
  ended_at: "",
  court: "7",
  tournament_name: "Veteran Men's Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. C.",
        last_name: "Bloore",
        seed: 2,
      },
      {
        title: "Mr. M.",
        last_name: "Hall",
        seed: 2,
      },
    ],
    scores: [],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Mr. A.",
        last_name: "Eaton",
        seed: 1,
      },
      {
        title: "Mr. J.",
        last_name: "Boyle",
        seed: 1,
      },
    ],
    scores: [],
  },
};

export default fixture14;
