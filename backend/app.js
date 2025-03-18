import express from "express";

import reviewsRouter from "./src/routes/reviews.js";

const app = express();

app.use(express.json());

app.use("/api/reviews", reviewsRouter)

export default app;