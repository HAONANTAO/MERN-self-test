import express from "express";
import jwt from "jsonwebtoken";

const homeRouter = express.Router();

homeRouter.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
homeRouter.post("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

export { homeRouter };
