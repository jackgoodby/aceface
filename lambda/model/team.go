package model

type Team struct {
	Id      int      `json:"id"`
	Seed    int      `json:"seed"`
	Players []Player `json:"players"`
}
