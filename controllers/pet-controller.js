import pets from "./users/pet.js";
import users from "./users/users.js";

const petController = (app) => {
//  app.post('/api/pet', createProfile);
    app.get('/api/pet/:uid', findPetById);
    app.get('/api/pet', findAllPet);
//  app.delete('/api/pet/:uid', deleteProfile);
//  app.put('/api/pet/:uid', updateProfile);
}

// find all pets
const findAllPet = (req, res) => {
    res.json(pets);
}

// find pet by ID
const findPetById = (req, res) => {
    const petId = req.params.uid;
    const pet = pets.find(u => u._id === petId);

    if (pet) {
        res.json(pet);                                     // pet is in database
    } else {
        res.sendStatus(404);                                // pet not found
    }
}

export default petController;