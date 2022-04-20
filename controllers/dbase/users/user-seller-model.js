import mongoose from "mongoose";
import userSellerSchema from "./user-seller-schema.js";

const userSellerModel = mongoose.model('UsersSellerModel', userSellerSchema);

export default userSellerModel;