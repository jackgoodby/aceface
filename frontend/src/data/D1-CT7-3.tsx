import { MatchData } from "../types/MatchData";

const fixture8: MatchData = {
  scheduled_start_at: "2023-09-23T16:00:00Z",
  actual_start_at: "2023-09-23T16:00:00Z",
  ended_at: "",
  court: "7",
  tournament_name: "Mixed Doubles Plate Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. A.",
        last_name: "Eaton",
      },
      {
        title: "Ms. J.",
        last_name: "Eaton",
      },
    ],
    scores: [2],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. V.",
        last_name: "Molineaux",
      },
      {
        title: "Mr. J.",
        last_name: "Bartlett",
      },
    ],
    scores: [1],
  },
};

export default fixture8;
