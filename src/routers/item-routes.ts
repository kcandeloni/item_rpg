import { Router } from "express";
import { getItemController } from "../useCases";

const itemRouter = Router();

itemRouter.get("/fantasy/create/item", (req, res) => getItemController.handle(req, res));

export default itemRouter;