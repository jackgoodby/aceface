#COLORS
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

up-app:
	docker-compose up -d

down-app:
	docker-compose down -v --remove-orphans

reset:
	aws dynamodb delete-table --table-name aceface-fixture --endpoint-url http://localhost:8000

create-table:
	aws dynamodb create-table --cli-input-json file://datasource/json/create-table-fixture.json --endpoint-url http://localhost:8000

fixtures:
	aws dynamodb batch-write-item --cli-input-json file://datasource/json/fixture-fixtures.json --endpoint-url http://localhost:8000

teams:
	aws dynamodb batch-write-item --cli-input-json file://datasource/json/fixture-teams.json --endpoint-url http://localhost:8000