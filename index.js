const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/v1");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1", routes);

dotenv.config();
mongoose.set("strictQuery", false);
const PORT = process.env.PORT;
const ATLAS_MONGO_SERVER = process.env.ATLAS_MONGO_CONNECTION;

mongoose.connect(ATLAS_MONGO_SERVER).then(() => {
  console.log("Connected to the MongoDB");
  app.listen(PORT, () => {
    console.log("Express server started at PORT = " + PORT);
  });
});
