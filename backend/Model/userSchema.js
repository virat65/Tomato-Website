import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, default:""},
  password: { type: String, default: "" },
  image: { type: String, default: "" },
  token: { type: String, default: "" },
  phone: { type: Number,default:"" },
  logintime: { type: String, default: "" },
}, { timestamps: true });

const userModel = new mongoose.model("user", userSchema);
export default userModel;
