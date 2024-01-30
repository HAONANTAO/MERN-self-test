import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await UserModel.findOne({ username, password });
  if (existingUser) {
    
  }
 
  try {
    await User.save();
    res.json(User);
  } catch (error) {
    res.status(500).json({ message: "创建失败" });
    console.log(error);
  }
});

export { loginRouter };
