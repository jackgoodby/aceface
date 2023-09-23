import { MatchData } from "../types/MatchData";

const fixture1: MatchData = {
  scheduled_start_at: "2023-09-23T12:00:00Z",
  actual_start_at: "",
  ended_at: "",
  court: "1",
  tournament_name: "Ladies' Singles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. N.",
        last_name: "Hatton",
        seed: 2,
      },
    ],
    scores: [3],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. M.",
        last_name: "Oddland",
        seed: 1,
      },
    ],
    scores: [3],
  },
};

export default fixture1;
