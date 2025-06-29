import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import reviewsRouter from "./src/routes/reviews.js";
import ordersRouter from "./src/routes/orders.js"
import buyerRouter from "./src/routes/buyer.js"
import sellerRouter from "./src/routes/seller.js"
import productsRouter from "./src/routes/products.js";
import categoriesRouter from "./src/routes/categories.js";
import techniqueRouter from "./src/routes/techniques.js";
import salesRouter from "./src/routes/sales.js"
import loginRouter from "./src/routes/logIn.js"
import PasswordRecoveryRouter from "./src/routes/passwordRecovery.js";
import logoutRouter from "./src/routes/logout.js"

const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

app.use(express.json());
app.use(cookieParser());

app.use("/api/orders", ordersRouter);
app.use("/api/buyer", buyerRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/reviews", reviewsRouter)
app.use("/api/sales", salesRouter)
app.use("/api/products", productsRouter)
app.use("/api/categories", categoriesRouter)
app.use("/api/techniques", techniqueRouter)
app.use("/api/passwordRecovery", PasswordRecoveryRouter)

app.use("/api/login", loginRouter)
app.use("/api/logout", logoutRouter)

export default app;