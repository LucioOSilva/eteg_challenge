# John Doe — Customer Registration

Application for customer registration built with NestJS, React and PostgreSQL.

## Tech Stack

**Backend** — NestJS · TypeScript · TypeORM · PostgreSQL  
**Frontend** — React · TypeScript · Vite  
**Infrastructure** — Docker · Docker Compose

## Requirements

- Node.js 22.x
- Docker and Docker Compose

##
##
##
## BACKEND - Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Configure environment variables

```bash
This is not necessary - (.env file was added to version control)
(💣Dont do this at home💣)
```

### 3. Start the application

```bash
docker compose up --build
```

### 4. Run migrations

```bash
cd backend
npm run migration:run
```

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health-check | Health check |
| GET | /api/users/list-paginated | List Users
| POST | /api/users/create | Create user |
| PATCH | /api/users/update-user-color | Update user color |

## Running Tests

```bash
cd backend
npm run test
```
##
##
##
## FRONTEND - Getting Started
