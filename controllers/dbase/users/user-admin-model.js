import mongoose from "mongoose";
import userAdminSchema from "./user-admin-schema.js";

const userAdminModel = mongoose.model('UsersAdminModel', userAdminSchema);

export default userAdminModel;