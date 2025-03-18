import express from "express";

import reviewsRouter from "./src/routes/reviews.js";
import productsRouter from "./src/routes/products.js";
import categoriesRouter from "./src/routes/categories.js";
import techniqueRouter from "./src/routes/techniques.js";

const app = express();

app.use(express.json());

app.use("/api/reviews", reviewsRouter)
app.use("/api/products", productsRouter)
app.use("/api/categories", categoriesRouter)
app.use("/api/techniques", techniqueRouter)

export default app;