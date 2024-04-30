import mongoose, { Schema } from "mongoose";

interface IUsers {
  // firstname: String;
  // middlename: String;
  // lastname: String;
  email: string;
  password: string;
  // mobileNo: String;
  role: string;
}

const userSchema: Schema = new mongoose.Schema<IUsers>(
  {
    // firstname: String,
    // middlename: String,
    // lastname: String,
    email: String,
    password: String,
    // mobileNo: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.users || mongoose.model<IUsers>("users", userSchema);

export default User;
