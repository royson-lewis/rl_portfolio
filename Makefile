default: env up start-frontend

env:
	rm -rf ./frontend/.env > /dev/null 2>&1
	rm -rf ./backend/.env > /dev/null 2>&1
	cp ./frontend/src/config/parameters/production.env ./frontend/.env
	cp ./backend/src/config/parameters/production.env ./backend/.env

env-production:
	rm -rf ./frontend/.env > /dev/null 2>&1
	rm -rf ./backend/.env > /dev/null 2>&1
	cp ./frontend/src/config/parameters/production.env ./frontend/.env
	cp ./backend/src/config/parameters/production.env ./backend/.env

up: env down
	docker-compose -f docker-compose.yml up -d

up-production: down
	docker-compose -f docker-compose.prod-remote.yml up -d

ceck-env:
	docker-compose -f docker-compose.yml exec -T backend sh -c \
    	"cat src/config/parameters/production.env"

start-frontend:
	docker-compose -f docker-compose.yml exec frontend sh -c \
    	"yarn start"

start-backend:
	docker-compose -f docker-compose.yml exec backend sh -c \
    	"yarn start"

down: timeout
	docker ps -a -q | xargs -n 1 -P 8 -I {} docker stop {}
	docker builder prune --all --force
	docker system prune -f

timeout:
	export DOCKER_CLIENT_TIMEOUT=2000
	export COMPOSE_HTTP_TIMEOUT=2000

kill:
	docker-compose -f docker-compose.yml exec -T frontend sh -c \
	"killall node > /dev/null 2>&1"

lint-frontend:
	docker-compose -f docker-compose.yml exec frontend sh -c \
 	 "yarn eslint && yarn stylelint && yarn prettier && yarn typescript && ANALYZE=true yarn build"

lint-backend:
	docker-compose -f docker-compose.yml exec backend sh -c \
 	 "yarn eslint && yarn prettier && yarn typescript && ANALYZE=true yarn build"

ssh-frontend: timeout
	docker-compose -f docker-compose.prod.yml exec frontend sh

ssh-backend: timeout
	docker-compose -f docker-compose.prod.yml exec backend sh

ssh-nginx: timeout
	docker-compose -f docker-compose.prod.yml exec reverse-proxy sh

build: down timeout
	docker-compose -f docker-compose.yml build
	docker-compose up -d --remove-orphans
	make package-frontend
	make package-backend
	make down

build-production: down timeout
	docker-compose -f docker-compose.prod.yml build

package-frontend:
	docker-compose -f docker-compose.yml exec -T frontend sh -c \
	"yarn install"

package-backend:
	docker-compose -f docker-compose.yml exec -T backend sh -c \
	"yarn install"

owner:
	chown -R $$(whoami) .
	chmod -R 777 .

destroy: down
	docker system prune -a -f

log:
	docker-compose -f docker-compose.yml ps
	sleep 1
	docker-compose -f docker-compose.yml logs -f

serve-frontend:
	docker-compose -f docker-compose.prod.yml exec -d -T frontend sh -c \
	"yarn serve"

serve-backend:
	docker-compose -f docker-compose.prod.yml exec -d backend sh -c \
	"yarn serve"

bundle-frontend:
	docker-compose -f docker-compose.prod-remote.yml exec -T frontend sh -c \
	"yarn build"

bundle-backend:
	docker-compose -f docker-compose.yml exec -T backend sh -c \
	"yarn build"

# db
migration-generate:
	docker-compose -f docker-compose.yml exec backend sh -c \
  "yarn run migration:generate src/database/migrations/$(name)"

migration-create:
	docker-compose -f docker-compose.yml exec backend sh -c \
  "yarn run migration:create src/database/migrations/$(name)"

migration-run:
	docker-compose -f docker-compose.prod-remote.yml exec -T backend sh -c \
	"yarn run migration:run"

migration-revert:
	docker-compose -f docker-compose.yml exec backend sh -c \
	"yarn run migration:revert"
