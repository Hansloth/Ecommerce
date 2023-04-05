const express = require("express");
const app = express();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const cors = require("cors");

const apiRoutes = require("./routes/routing");
//const connectDB = require("./db/connect");

//cross-origin policy to allow catalog to populate items from a different origin.
const corsOptions = {
  origin: "http://localhost:3000",
  credential: true,
  optionSuccessStatus: 200,
};
//enforce policy
app.use(cors(corsOptions));

//access database .env file
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());
//routes
app.use("/", apiRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

//start the server
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    //await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(">>Server is listening on port " + port);
    });
  } catch (error) {
    console.log(">>Error:\n" + error);
  }
};

start();
