import mongoose from "mongoose";

const userAdminSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    type: String,
}, {collection: 'users-admin'});

export default userAdminSchema;