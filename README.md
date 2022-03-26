# Devops-MVP

A repo that will contain an mvp devops env using docker, docker-compose and github actions. This will also serve as an MVP account management app.

## Repo Settings

In order to get everything working on GitHub a few things needed to be added:

1. Added the following protections to the `main` branch
   1. Require pull request before merge
      1. Require approvals
   2. Require status checks to pass before merge
      1. Require branches to be up to date before merging
2. [more soon]

## Docker Commands

Builds the frontend container with the tag do-front/latest

```
docker build -f ./frontend/Dockerfile.dev -t do-front ./frontend
```

Runs the container with hot reloading

```
docker run --env-file ./.env -v ${pwd}\frontend\src:/app/src -d -p 3000:3000 --name front do-front
```

Builds the frontend image using the production dockerfile

```
docker build -f ./frontend/Dockerfile.prod -t do-front-prod ./frontend
```

Builds the container for prod

```
docker run --env-file ./.env -d -p 80:80 --name front-prod do-front-prod
```

## Docker Compose Commands

Runs all non-production commands previously listed (`--build` ensures changes to dockerfiles will be picked up)

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```

Runs all production commands previously listed (`--build` ensures changes to dockerfiles will be picked up)

```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
```

Closes all containers built using the develop command

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml down
```

Closes all containers built using the production command

```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down
```
