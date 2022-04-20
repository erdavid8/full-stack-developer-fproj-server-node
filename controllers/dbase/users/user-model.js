import mongoose from "mongoose";
import userAdminSchema from "./user-admin-schema.js";
import userBuyerSchema from "./user-buyer-schema.js";
import userSellerSchema from "./user-seller-schema.js";

const userAdminModel = mongoose.model('UsersModel', userAdminSchema);
const userBuyerModel = mongoose.model('UsersModel', userBuyerSchema);
const userSellerModel = mongoose.model('UsersModel', userSellerSchema);

export default {userAdminModel, userBuyerModel, userSellerModel};