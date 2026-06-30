import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";

//creating express app using http server
const app = express();
const server = http.createServer(app)

//initializing socket.io server
export const io = new Server(server, {
    cors: {origin: "*"}
})

//middleware setup
app.use(express.json({limit:"4mb"}));
app.use(cors());


//Routes setup
app.use("/api/status", (req,res)=> res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter)

//Connect to mongodb
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log("Server is running on PORT: "+PORT));
