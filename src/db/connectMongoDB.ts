import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

const connectMongoDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    if (connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(mongoURI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
