package model

import (
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

type Score struct {
	Id        string           `json:"id" dynamodbav:"id"`
	SortKey   string           `json:"sort_key" dynamodbav:"sort_key"`
	TeamASets map[int]SetScore `json:"team_a_sets" dynamodbav:"team_a_sets"`
	TeamBSets map[int]SetScore `json:"team_b_sets" dynamodbav:"team_b_sets"`
}

func (s Score) GetTableName() string {
	return "fixture" //TODO: do this as a public constant and whatnot
}

func (s Score) GetKey() map[string]types.AttributeValue {
	id, err := attributevalue.Marshal(s.Id)
	if err != nil {
		panic(err)
	}
	sk, err := attributevalue.Marshal(s.SortKey)
	if err != nil {
		panic(err)
	}
	return map[string]types.AttributeValue{"id": id, "sort_key": sk}
}
