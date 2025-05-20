import mongoose from "mongoose";
import { db_url } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(db_url);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Something went wrong  while connecting to MongoDB");
    console.log(error);
  }
}
