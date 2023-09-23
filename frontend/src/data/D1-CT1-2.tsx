import { MatchData } from "../types/MatchData";

const fixture2: MatchData = {
  scheduled_start_at: "2023-09-23T14:00:00Z",
  actual_start_at: "2023-09-23T14:09:00Z",
  ended_at: "",
  court: "1",
  tournament_name: "Men's Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. R.",
        last_name: "Banno",
        seed: 2,
      },
      {
        title: "Mr. S.",
        last_name: "Hathaway",
        seed: 2,
      },
    ],
    scores: [4, 0],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Mr. A.",
        last_name: "Mentjes",
        seed: 1,
      },
      {
        title: "Mr. C.",
        last_name: "Hill",
        seed: 1,
      },
    ],
    scores: [6, 2],
  },
};

export default fixture2;
