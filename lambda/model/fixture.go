package model

type Fixture struct {
	Id             string `json:"id"`
	SortKey        string `json:"sort_key"`
	StartAt        string `json:"start_at"`
	EndedAt        string `json:"ended_at"`
	Court          int64  `json:"court"`
	InProgress     bool   `json:"in_progress"`
	TournamentName string `json:"tournament_name"`
}
