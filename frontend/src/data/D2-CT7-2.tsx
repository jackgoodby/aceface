import { MatchData } from "../types/MatchData";

const fixture15: MatchData = {
  scheduled_start_at: "2023-09-24T15:00:00Z",
  actual_start_at: "2023-09-24T15:05:00Z",
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
    scores: [1],
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
    scores: [0],
  },
};

export default fixture15;
