import mongoose from "mongoose";
import userSellerSchema from "./user-buyer-schema.js";

const userSellerModel = mongoose.model('UsersSellerModel', userSellerSchema);

export default userSellerModel;