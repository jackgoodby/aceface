package main

import (
	"context"
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/jackgoodby/aceface/lambda/actions"
	"log"
)

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	// do something to get the fixture from the API query
	queryFixture := "FIXTURE1"

	responseCode := 200

	cfg, err := config.LoadDefaultConfig(context.TODO(),
		config.WithRegion("eu-west-2"),
	)
	if err != nil {
		log.Fatalf("unable to load SDK config, %v", err)
	}

	fixtureActions := actions.FixtureActions{
		DClient: dynamodb.NewFromConfig(cfg),
	}

	fixture, err := fixtureActions.GetFixtureById(queryFixture)
	if err != nil {
		log.Fatalf("failed to get fixture, %v", err)
	}

	response, err := json.Marshal(fixture)
	if err != nil {
		log.Println(err)
		response = []byte("Internal Server Error")
		responseCode = 500
	}

	return events.APIGatewayProxyResponse{
		Body:       string(response),
		StatusCode: responseCode,
	}, nil
}

func main() {
	lambda.Start(HandleRequest)
}
