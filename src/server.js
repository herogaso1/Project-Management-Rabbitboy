import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import { swaggerDocs } from "./swagger.js";

dotenv.config();
connectDB();

const app = express();
swaggerDocs(app);
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
