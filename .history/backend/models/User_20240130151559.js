import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  job: { type: String, required: true },
});

const UserModel = mongoose.u