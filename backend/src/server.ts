import "dotenv/config";
import express from "express";
import cors from "cors";

// Import route files
import healthRoutes from "./routes/healthRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/api", healthRoutes);

//Backend root route

app.get("/", (_req, res) => {
  res.send("GardenCircle Backend Root 🌿");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
