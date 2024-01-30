import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({ username, password });

    if (existingUser) {
      res.json(existingUser);
    } else {
      res.status(500).json({ message: "login失败" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { loginRouter };
