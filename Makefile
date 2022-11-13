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

build-app:
	docker build . -t rl_portfolio

up-app:
	docker run -p 5000:8080 -d rl_portfolio

ssh-app:
	docker exec rl_portfolio bash

up: down docker
	docker-compose -f ./docker-compose.yml up -d --remove-orphans
	docker-compose -f ./docker-compose.yml exec -T frontend.app bash -c \
    "cd /var/www/html/$(WEBSITE)/ && yarn start"

build: reset
rebuild: reset
reset: down timeout docker
	docker-compose -f ../../docker-compose.yml build
	docker-compose -f ../../docker-compose.yml up -d --remove-orphans
	make package
	make down

deploy:
	docker-compose restart frontend.nginx

docker: timeout

down: timeout
	docker ps -a -q | xargs -n 1 -P 8 -I {} docker stop {}
	docker builder prune --all --force
	docker system prune -f

env:
ifeq ($(IS_WSL), true)
	@echo "This is Local"
	rm -rf .env > /dev/null 2>&1
	cp ./src/config/parameters/local.env .env
else
	@echo "This is Remote"
endif

init: destroy
destroy: down
	rm -rf ../../docker > /dev/null 2>&1
	make docker
	docker volume prune -f
	docker-compose -f ../../docker-compose.yml build --no-cache
	docker-compose -f ../../docker-compose.yml up -d --remove-orphans
	make package
	make down

kill:
	docker-compose -f ../../docker-compose.yml exec -T frontend.app bash -c \
	"killall node > /dev/null 2>&1"

lint:
	docker-compose -f ../../docker-compose.yml exec -T frontend.app bash -c \
  	"cd /var/www/html/$(WEBSITE) && yarn eslint && yarn stylelint && yarn prettier && ANALYZE=true yarn build"

log:
	docker-compose -f ../../docker-compose.yml ps
	sleep 1
	docker-compose logs -f

owner:
	cd ../../html && chown -R $$(whoami) .
	mkdir -p ../../docker
	chmod -R 777 ../../docker

package:
	docker-compose -f ../../docker-compose.yml exec -T frontend.app bash -c \
	"cd /var/www/html/$(WEBSITE)/ && yarn install"
	make owner

restart: down default

serve-all:
	for d in $$(ls ../); do cd ../$$d && make serve > /dev/null 2>&1; done

serve:
	docker-compose -f ../../docker-compose.yml exec -T frontend.app bash -c \
		"cd /var/www/html/$(WEBSITE)/ && fuser -k -n tcp $(PORT) || true"
	docker-compose -f ../../docker-compose.yml exec -T frontend.app bash -c \
		"cd /var/www/html/$(WEBSITE)/ && yarn serve &" > /dev/null 2>&1

ssh: timeout
	docker-compose -f ../../docker-compose.yml exec frontend.app bash

timeout:
	export DOCKER_CLIENT_TIMEOUT=2000
	export COMPOSE_HTTP_TIMEOUT=2000

webpack:
	docker-compose -f ../../docker-compose.yml exec -T frontend.app bash -c \
	"cd /var/www/html/$(WEBSITE)/ && yarn build"

webpack-analyze:
	docker-compose -f ../../docker-compose.yml exec -T frontend.app bash -c \
	"cd /var/www/html/$(WEBSITE)/ && ANALYZE=true yarn build"
