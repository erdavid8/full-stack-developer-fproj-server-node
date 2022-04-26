import mongoose from "mongoose";

const userBuyerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    type: String,
    likedItems: [String],
    adoptedItems: [String],
    following: [String],
    photo: String
}, {collection: 'users-buyer'});

export default userBuyerSchema;