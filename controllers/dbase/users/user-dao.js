import userModel from "./user-model.js";

const findAllProfile = () => userModel.find();
const findProfileById = (id) => userModel.findById(id);
const findProfileByEmail = (email) => userModel.findOne({email});
const findProfileByCredentials = (email, password) => userModel.findOne({email, password});
const createProfile = (user) => userModel.create(user);
const deleteProfile = (id) => userModel.deleteOne({_id: id})

export default {findAllProfile, findProfileById, findProfileByEmail,
    findProfileByCredentials, createProfile, deleteProfile};
