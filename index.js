const express = require("express");
const cors = require("cors");
const { connect } = require("./Config/db");
const { userRouter } = require("./Controllers/userController");
require("dotenv").config();

const port = process.env.PORT || 6363;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(port, async () => {
  try {
    await connect;
    console.log(`server is running on http://localhost:${port}`);
  } catch (error) {
    console.log({ msg: error });
  }
});
