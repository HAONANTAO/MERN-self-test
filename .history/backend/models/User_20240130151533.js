import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  job: { type: String, required: true },
});
