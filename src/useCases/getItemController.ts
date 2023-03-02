import { Request, Response } from "express";

export class GetItemController {
  constructor(){}

  handle(req: Request, res: Response): Response{
    return res.send({
      item: {
        name: "",
        type: "",
        style: "fantasy"
      }}).status(201);

  }
}