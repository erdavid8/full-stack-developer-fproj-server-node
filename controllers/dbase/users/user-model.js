import mongoose from "mongoose";
import userSchema from "./user-schema.js";

const userModel = mongoose.model('UsersModel', userSchema);

export default userModel;