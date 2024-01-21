
# Referral System API
## Overview
The Referral System API is designed to facilitate a unique referral code generation process for customers upon making a purchase. The system rewards customers when they accumulate 10 referral points by successfully referring other customers who use their assigned codes.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-folder>`
3. Install dependencies: `npm install`

## Run

- Run the application: `npm start`

## Testing

- Run tests: `npm test`

## Dependencies

- Node.js (v14 or later)
- Express
- MySQL
- TypeORM
- Swagger

## Docker

### Prerequisites

- Docker installed on your machine

### Build Docker Image

- Build the Docker image: `docker build -t referral-system-api .`

### Run Docker Container

- Run the Docker container: `docker-compose up`

## Environment Variables

Ensure that you set the required environment variables in the `.env` file before running the application.

- `MYSQL_ROOT_PASSWORD`
- `MYSQL_DATABASE`
- `MYSQL_USER`
- `MYSQL_PASSWORD`

---
