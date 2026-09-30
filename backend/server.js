import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "ok" }));
app.use("/api/auth", authRoutes);

app.listen(3001, () => console.log("app listening on port 3001"));