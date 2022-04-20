import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: String,
    phone: String,
    type: String,
    likedItems: [String],
    postedItems: [String],
    adoptedItems: [String],
    following: [String]
}, {collection: 'users'});

export default userSchema;