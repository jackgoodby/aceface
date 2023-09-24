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

const fixture9: MatchData = {
  scheduled_start_at: "2023-09-24T12:00:00Z",
  actual_start_at: "2023-09-24T12:15:00Z",
  ended_at: "2023-09-24T12:55:00Z",
  court: "1",
  tournament_name: "Men's Singles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Mr. F.",
        last_name: "Cook",
        seed: 1,
      },
    ],
    scores: [6, 6, 0],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. J.",
        last_name: "Hart",
        seed: 2,
      },
    ],
    scores: [1, 0, 0],
  },
};

export default fixture9;
