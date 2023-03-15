import { Router, Request, Response, json } from "express";
import { Article, NewArticle } from "./interfaces/article";

export const generateId = (): string => {
  return Date.now() + "_" + Math.round(Math.random() * 1e12);
};

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

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body;
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).end();
});

export default app;
