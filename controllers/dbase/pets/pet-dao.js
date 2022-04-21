import petModel from "./pet-model.js";



const findAllPets = () => petModel.find();
const findPetByID = (id) => petModel.findById(id);

const findPetByName = (name) => petModel.find(name);

const createPetProfile = (pet) => petModel.insertMany(pet);
const deletePet = (id) => petModel.deleteOne({_id: id})


export default {findAllPets, findPetByID, findPetByName, createPetProfile, deletePet};