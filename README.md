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

```
docker build -t do-front ./frontend/
```

Will build the frontend container with the tag do-front/latest

```
docker run --env-file ./.env -v ${pwd}\frontend\src:/app/src -d -p 3000:3000 --name front do-front
```

Will run the container with hot reloading (currently bugged [[1]](https://github.com/facebook/create-react-app/issues/12002) [[2]](https://github.com/facebook/create-react-app/issues/11879))
