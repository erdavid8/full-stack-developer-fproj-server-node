import mongoose from "mongoose";
import userAdminSchema from "./user-admin-schema.js";
import userBuyerSchema from "./user-buyer-schema.js";
import userSellerSchema from "./user-seller-schema.js";
import userSchema from "./user-schema.js";

//const userAdminModel = mongoose.model('UsersAdminModel', userAdminSchema);
//const userBuyerModel = mongoose.model('UsersBuyerModel', userBuyerSchema);
const userSellerModel = mongoose.model('UsersModel', userSchema);

export default userSellerModel;