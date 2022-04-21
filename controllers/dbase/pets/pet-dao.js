import petModel from "./pet-model.js";



const findAllPets = () => petModel.find();
const findPetByID = (id) => petModel.findById(id);
let findPetByName;
if (name.match(/^[0-9a-fA-F]{24}$/)) {
    findPetByName = (name) => petModel.findById(name);
}
const createPetProfile = (pet) => petModel.insertMany(pet);
const deletePet = (id) => petModel.deleteOne({_id: id})


export default {findAllPets, findPetByID, findPetByName, createPetProfile, deletePet};