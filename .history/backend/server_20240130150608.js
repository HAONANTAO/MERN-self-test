import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const username = "Aaron";
const password = "Aaron1314";
mongoose.connect(
  "mongodb+srv://"+{username}+":"+${password}+"Aaron1314@cluster0.ukgs4gt.mongodb.net/?retryWrites=true&w=majority",
);
app.listen(3001, () => {
  console.log("链接成功 3001");
});
const db = mongoose.connection;
db.on("connected", () => {
  console.log("数据库链接成功");
});
