import mysql, { type Pool } from "mysql2/promise";

let pool: Pool | undefined;

function getRequiredEnvironmentVariable(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getDatabasePool() {
  if (!pool) {
    pool = mysql.createPool({
      host: getRequiredEnvironmentVariable("DB_HOST"),
      port: Number(process.env.DB_PORT ?? "3306"),
      user: getRequiredEnvironmentVariable("DB_USER"),
      password: getRequiredEnvironmentVariable("DB_PASSWORD"),
      database: getRequiredEnvironmentVariable("DB_NAME"),
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });
  }

  return pool;
}
