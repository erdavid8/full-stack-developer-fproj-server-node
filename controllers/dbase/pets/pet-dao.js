import petModel from "./pet-model.js";

const findAllPets = () => petModel.find();
const findPetByID = (id) => petModel.findById(id);

export default {findAllPets, findPetByID};