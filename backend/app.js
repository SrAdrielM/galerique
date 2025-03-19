import express from "express";

import reviewsRouter from "./src/routes/reviews.js";
import ordersRouter from "./src/routes/orders.js"
import buyerRouter from "./src/routes/buyer.js"

const app = express();

app.use(express.json());

app.use("/api/reviews", reviewsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/buyer", buyerRouter);

export default app;