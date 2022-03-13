const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./Middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./Routes/goalsRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
