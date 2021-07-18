import { Router } from "express";

import db from "../Service/db";

const controllerExample = Router();

controllerExample.get("/", (request, response): any => {
  const query = "SELECT * FROM table";
  db.query(query, function (err, results) {
    if (err) response.json({ erreur: err });
    else if (results) {
      response.json({ results });
    }
  });
});

export default controllerExample;
