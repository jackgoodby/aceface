import { MatchData } from "../types/MatchData";

const fixture4: MatchData = {
  scheduled_start_at: "2023-09-23T12:00:00Z",
  actual_start_at: "2023-09-23T12:00:00Z",
  ended_at: "2023-09-23T13:40:00Z",
  court: "5",
  tournament_name: "Men's Singles Plate Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. J.",
        last_name: "Adams",
      },
    ],
    scores: [3, 6],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Mr. P.",
        last_name: "Mainprice",
      },
    ],
    scores: [6, 7],
  },
};

export default fixture4;
