# variables
ENV := $(shell grep -w 'APP_ENV' .env)
UNAME := $(shell uname -a)
ifeq ($(findstring WSL,"$(UNAME)"),WSL)
	IS_WSL=true
else
	IS_WSL=false
endif

PORT = 5000

# pls sort alphabetically except 'default'

default: env up

env:
ifeq ($(IS_WSL), true)
	@echo "This is Local"
	rm -rf .env > /dev/null 2>&1
	cp ./src/config/parameters/local.env .env
else
	@echo "This is Remote"
endif

up: down
	docker-compose up --remove-orphans
	docker-compose exec -T web sh -c \
  	"yarn start"

down: timeout
	docker ps -a -q | xargs -n 1 -P 8 -I {} docker stop {}
	docker builder prune --all --force
	docker system prune -f

timeout:
	export DOCKER_CLIENT_TIMEOUT=2000
	export COMPOSE_HTTP_TIMEOUT=2000

kill:
	docker-compose exec -T web sh -c \
	"killall node > /dev/null 2>&1"

lint:
	docker-compose exec web sh -c \
  "yarn eslint && yarn stylelint && yarn prettier && yarn typescript && ANALYZE=true yarn build"

ssh: timeout
	docker-compose exec web sh

build: down timeout
	docker-compose build
	docker-compose up -d --remove-orphans
	make package
	make down

package:
	docker-compose exec web sh -c \
	"yarn install"
	make owner

owner:
	chown -R $$(whoami) .
	chmod -R 777 .

destroy: down
	docker volume prune -f
	docker-compose build --no-cache
	docker-compose up -d --remove-orphans
	make package
	make down

log:
	docker-compose ps
	sleep 1
	docker-compose logs -f

serve:
	docker-compose exec web sh -c \
	"yarn serve"

bundle:
	docker-compose exec web sh -c \
	"yarn build"

bundle-analyze:
	docker-compose exec web sh -c \
	"ANALYZE=true yarn build"
