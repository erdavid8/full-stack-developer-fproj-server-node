import mongoose from "mongoose";

const petSchema = mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    size: String,
    breed: String,
    description, String,
    photos: [String],
    species: String,
    url: String,
    contact: {
        email: String,
        phone: String
    }
}, {collection: 'pets'});

export default petSchema;