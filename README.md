# 💹 Monify

**Monify** is a comprehensive personal finance application designed to help users monitor their financial health easily and efficiently. By providing a clear overview of income and expenses, Monify empowers users to take control of their financial future.

## 🎥 Preview

*Check out our official motion flyer for a quick look at the interface and features:*

> [Link to your Motion Flyer/Video here]

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

## ✨ Features

* **Dynamic Dashboard:** Real-time visualization of your financial balance.
* **Transaction History:** Detailed logs of all incomes and expenses.
* **PostgreSQL Integration:** Robust and ACID-compliant data storage.
* **Responsive Design:** Fully optimized for mobile and desktop views.
