const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth-routes/auth-routes");
const shopProductsRouter = require("./routes/shop/product-route");
const adminProductsRouter = require("./routes/admin/products-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const adminOrderRouter = require("./routes/admin/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const commonFeatureRouter = require("./routes/common/feature-routes");
const nodemailerRouter = require("./routes/sahara/nodemailer-routes");
require("dotenv").config();

const mongodb = process.env.MONGODB_URI;

mongoose
  .connect(mongodb)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.PRODUCTION_URL,
      process.env.FRONTEND_URL,
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/common/feature", commonFeatureRouter);
app.use("/api/send-email", nodemailerRouter);
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
