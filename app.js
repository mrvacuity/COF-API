// 165.22.251.6

import express from "express";
import http from "http";
import path from "path";
import socketio from "socket.io";
import database from "./src/config/db.js";
import session from "express-session";
import fs from "fs";
import cors from "cors";
import router from "./src/router/index.js";
const app = express();
const server = http.createServer(app);
const io = socketio(server).sockets;
import { sessionjson } from "./src/config/json/session.js";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// database.sequelize.sync({ force: true });
// database.sequelize.sync();

class Server {
  constructor(port, app, io) {
    this.port = port;
    this.app = app;
    this.io = io;
  }
  core() {
    this.app.use(cors());
    this.app.use(session(sessionjson));
    this.app.use(express.json({ limit: "20mb" }));
    this.app.use("/api/", router);
    server.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}

let initialServer = new Server(5000, app, io);
initialServer.core();
