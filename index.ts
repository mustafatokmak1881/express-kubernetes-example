import express, { Request, Response, Application } from "express";
import http from "http";

const app: Application = express();
const port: number = 3002;

const server = http.createServer(app);

server.listen(port, (): void => {
  console.log(`Listening *: ${port}`);
});

app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome");
});
