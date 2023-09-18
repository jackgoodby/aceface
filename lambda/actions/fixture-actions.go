package actions

import (
	"context"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/jackgoodby/aceface/lambda/model"
	"log"
)

type FixtureActions struct {
	DynamoDbClient *dynamodb.Client
	TableName      string
}

func (actions FixtureActions) GetFixture(id string, sk string) (model.Fixture, error) {
	fixture := model.Fixture{Id: id, SortKey: sk}
	response, err := actions.DynamoDbClient.GetItem(context.TODO(), &dynamodb.GetItemInput{
		Key: fixture.GetKey(), TableName: aws.String(actions.TableName),
	})
	if err != nil {
		log.Printf("Couldn't get fixture %v. Here's why: %v\n", id, err)
	} else {
		err = attributevalue.UnmarshalMap(response.Item, &fixture)
		if err != nil {
			log.Printf("Couldn't unmarshal response. Here's why: %v\n", err)
		}
	}
	return fixture, err
}
