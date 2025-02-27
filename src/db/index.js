import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `database connected successfully DB HOST : ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb error", error);
  }
};

export default connectDB;
