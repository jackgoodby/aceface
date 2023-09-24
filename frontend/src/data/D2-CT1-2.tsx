import { MatchData } from "../types/MatchData";

/*
Instructions
Data file naming: [day]-[court]-[game]

1. Each team has a line marked scores.
2. Example: [3,6,0] = They got 3 in set 1, 6 in set 2 and 0 so far in set 3
3. Change the score and save the file
4. Go into an app called 'Tower'.
5. You will see the newly changed/saved file
6. click the 'stage all' button which will place a blue tick by it
7. Enter ANY TEXT in the 'Commit Subject' textbox
8. Click commit
9. Click the second white 'up' arrow in the top toolbar

DONE
*/

const fixture10: MatchData = {
  scheduled_start_at: "2023-09-24T14:00:00Z",
  actual_start_at: "",
  ended_at: "",
  court: "1",
  tournament_name: "Ladies' Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. N.",
        last_name: "Hatton",
        seed: 2,
      },
      {
        title: "Ms. J.",
        last_name: "Skym",
        seed: 2,
      },
    ],
    scores: [0, 0],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. A.",
        last_name: "Bolfa",
        seed: 3,
      },
      {
        title: "Ms. M.",
        last_name: "Oddland",
        seed: 3,
      },
    ],
    scores: [0, 0],
  },
};

export default fixture10;
