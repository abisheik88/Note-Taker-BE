import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data
// app.use(cors(""));
app.use(cors({origin: "*",})
);

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server running in ${"sucessfully"} mode on port ${PORT}..`
  )
);