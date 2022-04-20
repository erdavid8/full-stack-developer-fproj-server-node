import userAdminModel from "./user-admin-model.js";
import userBuyerModel from "./user-model.js";
import userSellerModel from "./user-model.js";

// admin DAO
const findAllProfileAdmin = () => userAdminModel.find();
const findProfileByIdAdmin = (id) => userAdminModel.findById(id);
const findProfileByEmailAdmin = (email) => userAdminModel.findOne({email});
const createProfileAdmin = (user) => userAdminModel.insertMany(user);
const deleteProfileAdmin = (id) => userAdminModel.deleteOne({_id: id})
const addlikedItem = (id, item) => userAdminModel.updateOne({_id: id}, {$set: {_id: item}})

// buyer DAO
const findAllProfileBuyer = () => userBuyerModel.find();
const findProfileByIdBuyer = (id) => userBuyerModel.findById(id);
const findProfileByEmailBuyer = (email) => userBuyerModel.findOne({email});
const createProfileBuyer = (user) => userBuyerModel.insertMany(user);
const deleteProfileBuyer = (id) => userBuyerModel.deleteOne({_id: id})

// seller DAO
const findAllProfileSeller = () => userSellerModel.find();
const findProfileByIdSeller = (id) => userSellerModel.findById(id);
const findProfileByEmailSeller = (email) => userSellerModel.findOne({email});
const createProfileSeller = (user) => userSellerModel.insertMany(user);
const deleteProfileSeller = (id) => userSellerModel.deleteOne({_id: id})

export default {findAllProfileAdmin, findProfileByIdAdmin, findProfileByEmailAdmin,
    createProfileAdmin, deleteProfileAdmin, findAllProfileBuyer, findProfileByIdBuyer,
    createProfileBuyer, findProfileByEmailBuyer, deleteProfileBuyer, findAllProfileSeller,
    findProfileByIdSeller, findProfileByEmailSeller, createProfileSeller, deleteProfileSeller, addlikedItem, };
