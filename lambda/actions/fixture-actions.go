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
	DClient *dynamodb.Client
}

//func (a FixtureActions) PutFixture(model.Fixture) (model.Fixture, error) {
//	// this is how we put an item
//	_, err = a.DDBClient.PutItem(&dynamodb.PutItemInput{
//		TableName: aws.String(myTableName),
//		Item:      av,
//	})
//	if err != nil {
//		panic(fmt.Sprintf("failed to put Record to DynamoDB, %v", err))
//	}
//
//	return fixture, err
//}

//func (a FixtureActions) GetFixtures(id string) model.Fixture {
//	// Will need this in a sec good for when I'm getting many
//	//fixtures := []model.Fixture{}
//	//err = dynamodbattribute.UnmarshalListOfMaps(page.Items, &fixtures)
//	//if err != nil {
//	//	panic(fmt.Sprintf("failed to unmarshal Dynamodb Scan Items, %v", err))
//	//}
//}

func (a FixtureActions) GetFixtureById(id string) (model.Fixture, error) {

	fixture := model.Fixture{Id: id, SortKey: "FIXTURE"}

	// Get single item from DB
	response, err := a.DClient.GetItem(context.TODO(),
		&dynamodb.GetItemInput{
			TableName: aws.String(fixture.GetTableName()),
			Key:       fixture.GetKey(),
		},
	)
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
