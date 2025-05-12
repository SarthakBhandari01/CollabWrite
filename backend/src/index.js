import express from "express";
import { PORT } from "./config/serverConfig.js";
import { StatusCodes } from "http-status-codes";
const app = express();

app.get("/ping", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "pong" });
});

app.listen(3000, () => {
  console.log("server is running on port", PORT);
});

