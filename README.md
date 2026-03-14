<p align="center">
  <img src="./monify-logo.svg" alt="Monify Logo" width="120px">
</p>

<p align="center">
  <strong>Monitor your personal finances easily and efficiently.</strong>
</p>

<p align="center">
  <img src="./monify.gif" alt="Monify Demo" width="100%">
</p>

---

## 🚀 Technologies

This project leverages a modern tech stack for scalability and performance:

* **Frontend:** React.js (Vite)
* **Backend:** NestJS (Node.js Framework)
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Language:** TypeScript
* **Styling:** Tailwind CSS

---

## 🛠 Setup & Installation

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/TobiasTac/monify.git
cd monify

```

### 2. Backend Configuration (NestJS)

Navigate to the server folder, install dependencies, and configure the environment:

```bash
cd api
yarn install

# Setup environment variables
cp .env.example .env

```

> **Note:** Open the `.env` file and update the `DATABASE_URL` with your PostgreSQL credentials.

```bash
# Run migrations (if using Prisma/TypeORM)
yarn prisma migrate dev # Example for Prisma

# Start the server
yarn start:dev

```

### 3. Frontend Configuration (React)

Open a new terminal, navigate to the web folder, and start the application:

```bash
cd frontend
yarn install

# Setup environment variables
cp .env.example .env

# Start the development server
yarn dev

```

---
