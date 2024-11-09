import express from "express";
import http from "http";

const app: any = express();
const port: number = 3002;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening *: ${port}`);
});

app.get("/", (req: any, res: any) => {
  res.send("Welcome");
});
