package model

import (
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

type Fixture struct {
	Id             string `json:"json_id" dynamodbav:"id"`
	SortKey        string `json:"json_sort_key" dynamodbav:"sort_key"`
	StartAt        string `json:"json_start_at" dynamodbav:"start_at,omitempty"`
	EndedAt        string `json:"json_ended_at" dynamodbav:"ended_at,omitempty"`
	Court          int64  `json:"json_court" dynamodbav:"court,omitempty"`
	InProgress     bool   `json:"json_in_progress" dynamodbav:"in_progress,omitempty"`
	TournamentName string `json:"json_tournament_name" dynamodbav:"tournament_name,omitempty"`
}

func (f Fixture) GetTableName() string {
	return "fixture" //TODO: do this as a public constant and whatnot
}

func (f Fixture) GetKey() map[string]types.AttributeValue {
	id, err := attributevalue.Marshal(f.Id)
	if err != nil {
		panic(err)
	}
	sk, err := attributevalue.Marshal(f.SortKey)
	if err != nil {
		panic(err)
	}
	return map[string]types.AttributeValue{"id": id, "sort_key": sk}
}
