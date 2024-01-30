import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";
const registerRouter = express.Router();

registerRouter.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
registerRouter.post("/", async (req, res) => {
  try {
    const User = new UserModel({ ...req.body });
    await User.save();
    res.json(User);
  } catch (error) {
    res.status(400).json({ message: "创建失败" });
    console.log(error);
  }
});

export { registerRouter };
