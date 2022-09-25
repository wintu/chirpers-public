#!/bin/bash
docker compose exec chirpers npm ci
docker compose exec chirpers npx sequelize db:migrate
docker compose exec chirpers pm2 reload all