import { MatchData } from "../types/MatchData";

const fixture15: MatchData = {
  scheduled_start_at: "2023-09-24T14:00:00Z",
  actual_start_at: "",
  ended_at: "",
  court: "7",
  tournament_name: "Ladies' Over 60s Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. J.",
        last_name: "Brayshay",
        seed: 1,
      },
      {
        title: "Ms. J.",
        last_name: "Williamson",
        seed: 1,
      },
    ],
    scores: [],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. P.",
        last_name: "Warren",
        seed: 2,
      },
      {
        title: "Ms. L.",
        last_name: "Boardman",
        seed: 2,
      },
    ],
    scores: [],
  },
};

export default fixture15;
