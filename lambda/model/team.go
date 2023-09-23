package model

type Team struct {
	Id      string `json:"id" dynamodbav:"id"`
	SortKey string `json:"sort_key" dynamodbav:"sort_key"`
	Seed    int    `json:"seed" dynamodbav:"seed"`
	Player1 Player `json:"player1" dynamodbav:"player1"`
	Player2 Player `json:"player2" dynamodbav:"player2"`
}
