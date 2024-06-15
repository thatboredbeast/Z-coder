import express from "express";
import dotevn from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"


dotevn.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());    //to extract fields from {fullName,user..etc} from auth.controller.js OR
// to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());
//Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`listening to port:${PORT}`);
});
