.PHONY: start migrate

start:
	docker compose -f backend/docker-compose.yml up --build -d & \
	docker compose -f frontend/docker-compose.yml up --build

migrate:
	cd backend && npm run migration:run

setup: start migrate