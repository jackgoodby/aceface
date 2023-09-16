package main

import (
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"log"
)

type Tournament struct {
	Name string `json:"name"`
}

type Court struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Team struct {
	Id      int      `json:"id"`
	Seed    int      `json:"seed"`
	Players []Player `json:"players"`
}

type Player struct {
	FirstName  string `json:"first_name"`
	FirstAbbr  string `json:"first_abbr"`
	LastName   string `json:"last_name"`
	ProfileUrl string `json:"profile_url"`
}

type Set struct {
	Id            int     `json:"id"`
	SetNumber     int     `json:"set_number"`
	TeamAGames    int     `json:"team_a_games"`
	TeamBGames    int     `json:"team_b_games"`
	TeamATBPoints *string `json:"team_a_tb_points"`
	TeamBTBPoints *string `json:"team_b_tb_points"`
	SetLength     int     `json:"set_length"`
}

type Fixture struct {
	Id         int         `json:"id"`
	StartAt    string      `json:"started_at"`
	EndedAt    interface{} `json:"ended_at"`
	InProgress bool        `json:"in_progress"`
	Tournament Tournament  `json:"tournament"`
	TeamA      Team        `json:"team_a"`
	TeamB      Team        `json:"team_b"`
	RoundId    int         `json:"round_id"`
	Court      Court       `json:"court"`
	WinnerId   int         `json:"winner_id"`
	Sets       []Set       `json:"sets"`
}

type WorkingFixture struct {
	Id    int  `json:"id"`
	TeamA Team `json:"team_a"`
	TeamB Team `json:"team_b"`
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	//court := Court{Id: 1, Name: "Centre Court"}

	player1 := Player{
		FirstName:  "Jack",
		FirstAbbr:  "Mr. J.",
		LastName:   "Goodby",
		ProfileUrl: "https://ace-face.co.uk/images/feds.png",
	}

	player2 := Player{
		FirstName:  "Annabel",
		FirstAbbr:  "Ms. A.",
		LastName:   "Goodby",
		ProfileUrl: "https://ace-face.co.uk/images/feds.png",
	}

	player3 := Player{
		FirstName:  "Manjit",
		FirstAbbr:  "Mr. M.",
		LastName:   "Singh",
		ProfileUrl: "https://ace-face.co.uk/images/feds.png",
	}

	player4 := Player{
		FirstName:  "Abi",
		FirstAbbr:  "Ms. A.",
		LastName:   "Reeve",
		ProfileUrl: "https://ace-face.co.uk/images/feds.png",
	}

	teamA := Team{
		Id: 1,
		//Seed:    5,
		Players: []Player{player1, player2},
	}

	teamB := Team{
		Id: 2,
		//Seed:    3,
		Players: []Player{player3, player4},
	}

	fixture := WorkingFixture{
		Id:    1,
		TeamA: teamA,
		TeamB: teamB,
	}

	response, err := json.Marshal(fixture)
	responseCode := 200

	//req.Header.Set("Content-Type", "application/json")

	if err != nil {
		log.Println(err)
		response = []byte("Internal Server Error")
		responseCode = 500
	}
	//{
	//	"isBase64Encoded": true|false,
	//	"statusCode": httpStatusCode,
	//	"headers": { "headerName": "headerValue", ... },
	//	"multiValueHeaders": { "headerName": ["headerValue", "headerValue2", ...], ... },
	//  "body": "..."
	//}

	return events.APIGatewayProxyResponse{
		Body:       string(response),
		StatusCode: responseCode,
	}, nil
}

func main() {
	lambda.Start(HandleRequest)
}
