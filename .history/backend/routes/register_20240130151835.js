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
    await
  } catch (error) {
    console.log(error);
  }
});

export { registerRouter };
