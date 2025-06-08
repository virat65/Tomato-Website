import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import dataBase from "./dataBaseConnection/database.js";
import userRouter from "./router/Router.js";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
const app = express();
dotenv.config();
const port = process.env.PORT;
dataBase();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const __curDir = fileURLToPath(import.meta.url); //give the current url
console.log(__curDir, "currentt direactoryyyyy");
const __rootDir = path.dirname(__curDir); //gives the current working folder name means highest parent folder
console.log(__rootDir, "root direactoryyyyyyy");
app.use("/image", express.static(path.join(__rootDir, "public/image"))); //it help us to access the images in our frontend via url  http://localhost:PORT/image/photo.jpg , if we have file public/image/photo.jpg
app.use(cors());
app.use(fileUpload());
app.use("/user", userRouter);
app.listen(port, () => {
  console.log(` server is running on ${port}`);
});
