import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ username, password });
    if (existingUser) {
      res.json(existingUser);
    }
  } catch (error) {
    res.status(500).json({ message: "login失败" });
    console.log(error);
  }
});

export { loginRouter };
