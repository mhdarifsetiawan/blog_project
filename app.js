require("dotenv").config();
const express = require("express");
// const authRouter = require("./src/auth/auth.route");
const userRouter = require("./src/user/user.route");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use(userRouter);
// app.use(authRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
