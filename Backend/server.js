const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/ToDoRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://202212044:Shubham@cluster0.oevrzw6.mongodb.net/")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(routes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
