import userModel from "./user-model.js";

const findAllProfile = () => userModel.find();
const findProfileById = (id) => userModel.findById(id);

export default {findAllProfile, findProfileById};
