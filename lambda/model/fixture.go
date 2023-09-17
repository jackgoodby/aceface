package model

type Fixture struct {
	Id         int         `json:"id"`
	StartAt    string      `json:"started_at"`
	EndedAt    interface{} `json:"ended_at"`
	InProgress bool        `json:"in_progress"`
	Tournament Tournament  `json:"tournament"`
	TeamA      Team        `json:"team_a"`
	TeamB      Team        `json:"team_b"`
	RoundId    int         `json:"round_id"`
	Court      Court       `json:"court"`
	WinnerId   int         `json:"winner_id"`
	Sets       []Set       `json:"sets"`
}
