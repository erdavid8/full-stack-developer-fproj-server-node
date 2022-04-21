import mongoose from "mongoose";

const userSellerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    type: String,
    likedItems: [String],
    adoptedItems: [String],
    following: [String]
}, {collection: 'users-seller'});

export default userSellerSchema;