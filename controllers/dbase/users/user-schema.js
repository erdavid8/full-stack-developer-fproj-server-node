import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    password: String,
    phone: String,
    type: String,
    likedItems: [String],
    postedItems: [String],
    adoptedItems: [String],
    following: [String]
}, {collection: 'users'});

export default userSchema;