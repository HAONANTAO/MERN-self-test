import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";
const registerRouter = express.Router();

registerRouter.get("/", async (req, res) => {
  try {
    const Users = await UserModel.find({});
    res.json(Users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "找不到Users" });
    console.log(error);
  }
});
registerRouter.post("/", async (req, res) => {
  const {username}
  const existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "用户名已存在" });
    console.log("用户名已存在");
  }
  const User = new UserModel({ ...req.body });
  try {
    await User.save();
    res.json(User);
  } catch (error) {
    res.status(500).json({ message: "创建失败" });
    console.log(error);
  }
});

export { registerRouter };
