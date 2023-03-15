import { Router, Request, Response } from "express";

const app = Router();

const date = (req: Request, res: Response) => {
  res.json({ date: new Date() });
};

app.get("/date", date);

export default app;
