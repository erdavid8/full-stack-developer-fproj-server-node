import pets from "./users/pet.js";
import users from "./users/users.js";
import petDao from "./dbase/pets/pet-dao.js";

const petController = (app) => {
    app.post('/api/pet', createPetProfile);
    app.get('/api/pet/:uid', findPetById);
    app.get('/api/pet-name/:name', findPetByName);
    app.get('/api/pet', findAllPet);
    app.delete('/api/pet/:uid', deletePet);
}

// create new pet profile
const createPetProfile = async (req, res) => {
    const pet = req.body;
    const insertPet = await petDao.createPetProfile(pet);
    res.json(insertPet);
}

// find all pets
const findAllPet = async (req, res) => {
    const pet = await petDao.findAllPets();
    res.json(pet);
}

// find pet by ID
const findPetById = async (req, res) => {

    const petId = req.params.uid;

    if ((new TextEncoder().encode(petId)).length !== 24) {
        return res.status(400).send({message: 'wrong number of ID characters'});
    }

    const pet = await petDao.findPetByID(petId);

    if (pet) {
        res.json(pet);                                     // pet is in database
    } else {
        res.sendStatus(404);                                // pet not found
    }
}

// find pet by name
const findPetByName = async (req, res) => {
    const petName = req.params.name;
    const pet = await petDao.findPetByName(petName);

    if (pet) {
        res.json(pet);                                     // pet is in database
    } else {
        res.sendStatus(404);                                // pet not found
    }
}

// delete pet profile
const deletePet = async (req, res) => {
    const petId = req.params.uid;

    if ((new TextEncoder().encode(petId)).length !== 24) {
        return res.status(400).send({message: 'wrong number of ID characters'});
    }

    const petDel = await petDao.deletePet(petId);

    if (petDel.deletedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

export default petController;