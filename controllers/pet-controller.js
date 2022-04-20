import pets from "./users/pet.js";
import users from "./users/users.js";
import petDao from "./dbase/pets/pet-dao.js";
import userDao from "./dbase/users/user-dao.js";

const petController = (app) => {
//  app.post('/api/pet', createProfile);
    app.get('/api/pet/:uid', findPetById);
    app.get('/api/pet', findAllPet);
//  app.delete('/api/pet/:uid', deleteProfile);
//  app.put('/api/pet/:uid', updateProfile);
}

// find all pets
const findAllPet = async (req, res) => {
    const pet = await petDao.findAllPets();
    res.json(pet);
}

// find pet by ID
const findPetById = async (req, res) => {
    const petId = req.params.uid;
    const pet = await petDao.findPetByID(petId);

    if (pet) {
        res.json(pet);                                     // pet is in database
    } else {
        res.sendStatus(404);                                // pet not found
    }
}

export default petController;