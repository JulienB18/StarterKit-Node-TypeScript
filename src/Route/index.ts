import { Router } from "express";
import controllerExample from "../Controller/ControllerExample";

const routes = Router();

routes.use("/example", controllerExample);

export default routes;
