import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.post("/", (req, res) => {});

app.listen(3000, () => {
  console.log("server started");
});
