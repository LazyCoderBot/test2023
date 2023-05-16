🚀 Welcome! This project uses Docker Compose to set up a PostgreSQL database and a Node.js server.

## Prerequisites

✅ Before getting started, make sure you have the following installed on your machine:
- Docker
- Docker Compose

## Getting Started

🔧 Follow these steps to get the project up and running:

1. Clone the repository

2. Navigate to the project directory

3. Build and start the containers using Docker Compose:
   ```docker-compose up -d```
  This command will start the PostgreSQL and server containers in the background.

4. Access the server:
  The server is now running and accessible at http://localhost:8080.

5. Stop the containers:
  To stop the containers, run the following command:
  ```docker-compose down```

## Configuration
  ⚙️ The project uses environment variables to configure the server's connection to the PostgreSQL database. You can modify the environment variables in the docker-compose.yml file to match your desired configuration.