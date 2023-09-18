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

	responseCode := 200

	tableName := "fixture"

	cfg, err := config.LoadDefaultConfig(context.TODO(),
		config.WithRegion("eu-west-2"),
	)
	if err != nil {
		log.Fatalf("unable to load SDK config, %v", err)
	}

	fixtureActions := actions.FixtureActions{
		TableName:      tableName,
		DynamoDbClient: dynamodb.NewFromConfig(cfg)}

	fixture, err := fixtureActions.GetFixture("FIXTURE1", "FIXTURE")
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
