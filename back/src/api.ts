import { Router, Request, Response } from "express";
import { Article } from "./interfaces/article";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.66, qty: 123 },
  { id: "a2", name: "Marteau", price: 3, qty: 78 },
];

const app = Router();

const date = (req: Request, res: Response) => {
  res.json({ date: new Date() });
};

app.get("/date", date);

app.get("/articles", (req, res) => {
  res.json(articles);
});

export default app;
