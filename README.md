# John Doe — Customer Registration

Application for customer registration built with NestJS, React and PostgreSQL.

## Tech Stack

**Backend** — NestJS · TypeScript · TypeORM · PostgreSQL  
**Frontend** — React · TypeScript · Vite  
**Infrastructure** — Docker · Docker Compose

## Requirements

- Node.js 22.x
- Docker and Docker Compose *(required)*
- Make *(optional, for first time setup shortcut)*

---

## 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

---

## 🚀 First time setup (optional shortcut)

> Requires `make` installed. This command builds, starts all services and runs migrations automatically.

```bash
 # if you dont have you can isntall make on linux with
 sudo apt update && sudo apt install build-essential -y
```

```bash
make setup
```
and then
```bash
cd backend
npm run migration:run
```

#### If you choose this option, after the build and run the migration just access:
> `http://localhost:3000`

---

### OR — You can run the services separately as shown below.

## Backend — Getting Started

### 1. You have to be in the directory
```
backend
```

### 2. Configure environment variables

```
This is not necessary - (.env file was added to version control)
(💣 Dont do this at home 💣)
```

### 3. Start the application

```bash
docker compose docker-compose.yml up --build
```

### 4. Run migrations

```bash
npm run migration:run
```

## 5. Running Tests

```bash
npm run test
```

## 6. API contracts

_**base:**_
> _localhost:3333_

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health-check | Health check |
| GET | /api/users/list-paginated | List users paginated |
| POST | /api/users/create | Create user |
| PATCH | /api/users/update-user-color | Update user color |

---

## Frontend — Getting Started

The frontend is automatically served by Docker.

### 1. You have to be in the directory
```
frontend
```

### 2. Environment variables

```
This is not necessary - (.env file was added to version control)
(💣 Dont do this at home 💣)
```

### 3. After running the backend, start the frontend:

```bash
docker compose docker-compose.yml up --build
```

Access the app at `http://localhost:3000`

---

## E2E Tests — Cypress

> Make sure the frontend is running at `http://localhost:3000` before running the tests.

### 1. You have to be in the directory
```
frontend
```

### 2. Open Cypress interactive runner

```bash
npx cypress open
```

### 3. Or run headless (CI mode)

```bash
npx cypress run
```

### Test coverage

| Test | Description |
|------|-------------|
| Header title | Checks that "Cadastro de cliente" is visible |
| Add button | Checks that "Adicionar cliente" button is visible |
| Customer counter | Checks that the customer count label is visible |
| Customer list | Checks that cards are rendered or empty state is shown |
| Card fields | Checks that CPF, Email, Cor favorita and Cadastrado em are visible |