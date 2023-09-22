package model

import (
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

type Fixture struct {
	Id               string `json:"id" dynamodbav:"id"`
	SortKey          string `json:"sort_key" dynamodbav:"sort_key"`
	ScheduledStartAt string `json:"scheduled_start_at" dynamodbav:"scheduled_start_at,omitempty"`
	ActualStartAt    string `json:"actual_start_at" dynamodbav:"actual_start_at,omitempty"`
	EndedAt          string `json:"ended_at" dynamodbav:"ended_at,omitempty"`
	Court            int64  `json:"court" dynamodbav:"court,omitempty"`
	InProgress       bool   `json:"in_progress" dynamodbav:"in_progress,omitempty"`
	TournamentName   string `json:"tournament_name" dynamodbav:"tournament_name,omitempty"`
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
