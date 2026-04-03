import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import AuthRoutes from "./routes/auth.route.js";
import UserRoutes from "./routes/user.route.js";
import PaymentRoutes from "./routes/payment.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);
app.use("/account", PaymentRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
  });
});
