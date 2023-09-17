package model

import (
	"github.com/jackgoodby/aceface/lambda"
)

type Fixture struct {
	Id         int               `json:"id"`
	StartAt    string            `json:"started_at"`
	EndedAt    interface{}       `json:"ended_at"`
	InProgress bool       `json:"in_progress"`
	Tournament Tournament `json:"tournament"`
	TeamA      lambda.main.Team  `json:"team_a"`
	TeamB      lambda.main.Team  `json:"team_b"`
	RoundId    int               `json:"round_id"`
	Court      lambda.main.Court `json:"court"`
	WinnerId   int               `json:"winner_id"`
	Sets       []model.Set      `json:"sets"`
}
