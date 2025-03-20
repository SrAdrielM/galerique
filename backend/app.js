import express from "express";

import reviewsRouter from "./src/routes/reviews.js";
<<<<<<< HEAD
import ordersRouter from "./src/routes/orders.js"
import buyerRouter from "./src/routes/buyer.js"
import sellerRouter from "./src/routes/seller.js"
=======
import productsRouter from "./src/routes/products.js";
import categoriesRouter from "./src/routes/categories.js";
import techniqueRouter from "./src/routes/techniques.js";
>>>>>>> kevin

const app = express();

app.use(express.json());

<<<<<<< HEAD
app.use("/api/reviews", reviewsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/buyer", buyerRouter);
app.use("/api/seller", sellerRouter);
=======
app.use("/api/reviews", reviewsRouter)
app.use("/api/products", productsRouter)
app.use("/api/categories", categoriesRouter)
app.use("/api/techniques", techniqueRouter)
>>>>>>> kevin

export default app;