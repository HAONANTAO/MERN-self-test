import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await UserModel.findOne({ username, password });

  try {
    if (existingUser) {
    }
  
    res.json(User);
  } catch (error) {
    res.status(500).json({ message: "login失败" });
    console.log(error);
  }
});

export { loginRouter };
