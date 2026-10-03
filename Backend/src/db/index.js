import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log("DB Connected successfully !");
  } catch (error) {
    console.log("MongoDB connection failed");
    process.exit(1)
  }
}

export { ConnectDB };
