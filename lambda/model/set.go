package model

type Set struct {
	Id            int     `json:"id"`
	SetNumber     int     `json:"set_number"`
	TeamAGames    int     `json:"team_a_games"`
	TeamBGames    int     `json:"team_b_games"`
	TeamATBPoints *string `json:"team_a_tb_points"`
	TeamBTBPoints *string `json:"team_b_tb_points"`
	SetLength     int     `json:"set_length"`
}
