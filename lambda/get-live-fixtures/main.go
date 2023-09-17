package main

import (
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"log"
)

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
