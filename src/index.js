require("dotenv").config();

// (async () => {
//   const database = require("./config/database");

//   try {
//     await database.sync();
//   } catch (error) {
//     console.log(error);
//   }
// })();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const server = express();
const APP_PORT = process.env.PORT || 3333;

const ProductRoutes = require("./routes/ProductRoutes");

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/", ProductRoutes);

server.use(
  "/produtcImgs",
  express.static(path.resolve(__dirname, "uploads", "productImgs"))
);

server.get("/", (req, res) => {
  res.send("Hello World!!");
});

server.listen(APP_PORT, () => {
  console.log(`♠♠ Server running on the port ${APP_PORT} ♠♠`);
});
