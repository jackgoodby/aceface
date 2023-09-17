package model

type Player struct {
	FirstName  string `json:"first_name"`
	Title      string `json:"title"`
	LastName   string `json:"last_name"`
	ProfileUrl string `json:"profile_url"`
}
