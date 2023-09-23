package model

type SetScore struct {
	Score         int `json:"score" dynamodbav:"score"`
	TiebreakScore int `json:"tiebreak_score" dynamodbav:"tiebreak_score"`
}
