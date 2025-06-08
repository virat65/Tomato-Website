import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import dataBase from "./dataBaseConnection/database.js";

import userRouter from "./router/Router.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
dataBase();
app.use(fileUpload());
app.use("/user", userRouter);
app.listen(port, () => {
  console.log(` server is running on ${port}`);
});
