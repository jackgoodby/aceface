#COLORS
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

up-app:
	docker-compose up -d

down-app:
	docker-compose down -v --remove-orphans

build:
	mkdir -p tmp/
	cd lambda && GOARCH=amd64 GOOS=linux go build -o ../tmp/get-live-fixtures-lambda-handler
	cd lambda/get-fixture-score && GOARCH=amd64 GOOS=linux go build -o ../../tmp/get-fixture-score-lambda-handler
	sam build

deploy:
	sam deploy --guided

reset:
	aws dynamodb delete-table --table-name fixture --endpoint-url http://localhost:8000

create-table:
	aws dynamodb create-table --cli-input-json file://data/fixtures/create-table-fixture.json --endpoint-url http://localhost:8000

fixtures:
	aws dynamodb batch-write-item --cli-input-json file://data/fixtures/fixture-fixtures.json --endpoint-url http://localhost:8000

teams1:
	aws dynamodb batch-write-item --cli-input-json file://data/fixtures/fixture-teams1.json --endpoint-url http://localhost:8000

teams2:
	aws dynamodb batch-write-item --cli-input-json file://data/fixtures/fixture-teams2.json --endpoint-url http://localhost:8000

scores:
	aws dynamodb batch-write-item --cli-input-json file://data/fixtures/fixture-scores.json --endpoint-url http://localhost:8000