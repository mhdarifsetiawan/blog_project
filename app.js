require("dotenv").config();
const express = require("express");
const authRouter = require("./src/auth/auth.route");
const userRouter = require("./src/user/user.route");
const postRouter = require("./src/post/post.route");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./src/config/swagger");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/", (req, res) => {
  res.send(`Simple server - Port (${port})`);
});

app.use(userRouter);
app.use(authRouter);
app.use(postRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
