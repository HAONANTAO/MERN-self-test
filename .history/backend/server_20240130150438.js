import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("链接成功 3001");
});

mongoose.connect(
  "mongodb+srv://Aaron:Aaron1314@cluster0.ukgs4gt.mongodb.net/?retryWrites=true&w=majority",
);

const db = mongoose.connection;
