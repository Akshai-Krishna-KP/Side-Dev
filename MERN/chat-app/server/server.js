import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { connectDB } from "./utils/db.js";
import { Device } from "./models/Device.js";
import { error } from "console";

// create Express app and HTTP server
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// setup socket.io and cors
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Middleqware
app.use(express.json({ limit: "5mb" }));
app.use(cors());

// check status of you r connection
app.get("/status", async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//

// connect to database
await connectDB();

// server listening
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
