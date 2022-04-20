import userModel from "./user-model.js";

const findAllProfile = () => userModel.find();
const findProfileById = (id) => userModel.findById(id);
const findProfileByEmail = (email) => userModel.findOne({email});
const createProfile = (user) => userModel.create(user);
const deleteProfile = (id) => userModel.deleteOne({_id: id})

export default {findAllProfile, findProfileById, findProfileByEmail,
    createProfile, deleteProfile};
