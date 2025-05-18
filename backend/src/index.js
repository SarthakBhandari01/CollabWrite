import express from "express";
import { Server } from "socket.io";
import { PORT } from "./config/serverConfig.js";
import { StatusCodes } from "http-status-codes";
import { createServer } from "http";
import cors from "cors";
const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  console.log("a user connected",socket);
});

app.get("/ping", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "pong" });
});

server.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
