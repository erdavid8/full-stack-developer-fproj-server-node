import mongoose from "mongoose";
import petSchema from "./pet-schema.js";

const petModel = mongoose.model('PetsModel', petSchema);

export default petModel;