import pets from "./users/pet.js";
import users from "./users/users.js";

const petController = (app) => {
//  app.post('/api/pet', createProfile);
    app.get('/api/pet/:uid', findPetById);
    app.get('/api/pet', findAllPet);
//  app.delete('/api/pet/:uid', deleteProfile);
//  app.put('/api/pet/:uid', updateProfile);
}

const findAllPet = (req, res) => {
    res.json(pets);
}

const findPetById = (req, res) => {
    const petId = req.params.uid;
    const pet = users.find(u => u._id === petId);
    res.json(pet);
}

export default petController;