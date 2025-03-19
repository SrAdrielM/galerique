import express from "express";

import reviewsRouter from "./src/routes/reviews.js";
import ordersRouter from "./src/routes/orders.js"

const app = express();

app.use(express.json());

app.use("/api/reviews", reviewsRouter);
app.use("/api/orders", ordersRouter);

export default app;