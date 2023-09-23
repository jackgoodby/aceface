package main

import (
	"context"
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/jackgoodby/aceface/lambda/actions"
	"log"
	"os"
)

func GetDynamoDBClient(cfg aws.Config) *dynamodb.Client {
	client := dynamodb.NewFromConfig(cfg)

	if "AWS_SAM_LOCAL" == os.Getenv("AWSENV") {
		client = dynamodb.NewFromConfig(cfg, func(options *dynamodb.Options) {
			options.BaseEndpoint = aws.String("http://host.docker.internal:8000")
		})
	}

	return client
}

func HandleGetFixtureScoreRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	cfg, err := config.LoadDefaultConfig(context.TODO(),
		config.WithRegion("eu-west-2"),
	)
	if err != nil {
		log.Fatalf("unable to load SDK config, %v", err)
	}

	fixtureActions := actions.FixtureActions{
		DClient: GetDynamoDBClient(cfg),
	}

	score, err := fixtureActions.GetFixtureScore(request.PathParameters["id"])
	if err != nil {
		log.Fatalf("failed to get fixture, %v", err)
	}

	// build response
	statusCode := 200
	response, err := json.Marshal(score)
	if err != nil {
		log.Println(err)
		response = []byte("Internal Server Error")
		statusCode = 500
	}

	headers := make(map[string]string)
	headers["Access-Control-Allow-Headers"] = "X-Forwarded-For, content-type, Access-Control-Allow-Origin"
	headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,PATCH,OPTIONS"
	headers["Access-Control-Allow-Origin"] = "*"

	return events.APIGatewayProxyResponse{
		Body:       string(response),
		Headers:    headers,
		StatusCode: statusCode,
	}, nil
}

func main() {
	lambda.Start(HandleGetFixtureScoreRequest)
}
