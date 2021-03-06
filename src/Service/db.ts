import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connexion à la base de données effectuée");
});

export default connection;
