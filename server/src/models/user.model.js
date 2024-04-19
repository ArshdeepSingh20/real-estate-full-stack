import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    avatar: {
      type:String,
      default:'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png'
    }
  },
  {
    timestamps: true,
  }
);


export const User = mongoose.model("User", userSchema);
