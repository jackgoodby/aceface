package model

type Fixture struct {
	Id             int    `json:"id"`
	StartAt        string `json:"start_at"`
	EndedAt        string `json:"ended_at"`
	InProgress     bool   `json:"in_progress"`
	TournamentName string `json:"tournament_name"`
}
