import mongoose from "mongoose";
import userBuyerSchema from "./user-buyer-schema.js";

const userBuyerModel = mongoose.model('UsersBuyerModel', userBuyerSchema);

export default userBuyerModel;