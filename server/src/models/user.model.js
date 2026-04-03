import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    plan: {
      type: String,
      enum: ["starter", "premium"],
      default: "starter",
    },
    planExpiresAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
