# ExpressJS OpenID Connect Demo

This repo shows how to add OIDC authentication to an express.js app.

To make local development easier, a local OIDC provider `dex` is used instead
of a real provider like Okta.

## Pre-requisites

- Docker
- Docker Compose
- Node.JS

## How to start

Start the dex server

```
docker-compose up -d
```

Install dependencies (one-time)

```
npm install
```

Start the demo app

```
node server.js
```

## Test the app

Open the app using the following link

<http://127.0.0.1:3000>
