package model

type Player struct {
	FirstName  string `json:"first_name" dynamodbav:"first_name"`
	Title      string `json:"title" dynamodbav:"title"`
	LastName   string `json:"last_name" dynamodbav:"last_name"`
	ProfileUrl string `json:"profile_url" dynamodbav:"profile_url"`
}

//func (p Player) GetTableName() string {
//	return "fixture" //TODO: do this as a public constant and whatnot
//}
//
//func (p Player) GetKey() map[string]types.AttributeValue {
//	id, err := attributevalue.Marshal(p.FirstName)
//	if err != nil {
//		panic(err)
//	}
//	return map[string]types.AttributeValue{"id": id}
//}
