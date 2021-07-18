import express from "express";
import routes from "./src/Route";
import * as dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: false, limit: "50MB" }));
app.use(express.json({ limit: "50MB" }));

// Default route
app.get("/", (request, response) => {
  response.json({
    message: "Starter Kit - API",
  });
});

// Version
app.get("/version", (request, response) => {
  response.json({
    message: "1.0.0",
  });
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
