import pets from "./users/pet.js";

const petController = (app) => {
//  app.post('/api/pet', createProfile);
    app.get('/api/pet/:uid', findAllPet);
//  app.get('/api/pet', findAllProfile);
//  app.delete('/api/pet/:uid', deleteProfile);
//  app.put('/api/pet/:uid', updateProfile);
}

const findAllPet = (req, res) => {
    res.json(pets);
}

export default petController;