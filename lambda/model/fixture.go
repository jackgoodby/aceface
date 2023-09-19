package model

import (
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)
import "github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"

type Fixture struct {
	Id             string `json:"id"`
	SortKey        string `json:"sort_key"`
	StartAt        string `json:"start_at"`
	EndedAt        string `json:"ended_at"`
	Court          int64  `json:"court"`
	InProgress     bool   `json:"in_progress"`
	TournamentName string `json:"tournament_name"`
}

func (fixture Fixture) GetKey() map[string]types.AttributeValue {
	id, err := attributevalue.Marshal(fixture.Id)
	if err != nil {
		panic(err)
	}
	sk, err := attributevalue.Marshal(fixture.SortKey)
	if err != nil {
		panic(err)
	}
	return map[string]types.AttributeValue{"id": id, "sort_key": sk}
}
