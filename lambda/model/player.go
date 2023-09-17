package model

type Player struct {
	FirstName  string `json:"first_name"`
	FirstAbbr  string `json:"first_abbr"`
	LastName   string `json:"last_name"`
	ProfileUrl string `json:"profile_url"`
}
