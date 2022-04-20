import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    type: String,
    likedItems: [String],
    postedItems: [String],
    adoptedItems: [String],
    following: [String]
}, {collection: 'users'});

export default userSchema;