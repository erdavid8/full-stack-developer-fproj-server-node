import userAdminModel from "./user-admin-model.js";
import userBuyerModel from "./user-buyer-model.js";
import userSellerModel from "./user-seller-model.js";

// admin DAO
const findAllProfileAdmin = () => userAdminModel.find();
const findProfileByIdAdmin = (id) => userAdminModel.findById(id);
const findProfileByEmailAdmin = (email) => userAdminModel.findOne({email});
const createProfileAdmin = (user) => userAdminModel.insertMany(user);
const deleteProfileAdmin = (id) => userAdminModel.deleteOne({_id: id})

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
const addlikedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$addToSet: {likedItems: item}})
const removelikedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$pullAll: {likedItems: item}})

export default {findAllProfileAdmin, findProfileByIdAdmin, findProfileByEmailAdmin,
    createProfileAdmin, deleteProfileAdmin, findAllProfileBuyer, findProfileByIdBuyer,
    createProfileBuyer, findProfileByEmailBuyer, deleteProfileBuyer, findAllProfileSeller,
    findProfileByIdSeller, findProfileByEmailSeller, createProfileSeller, deleteProfileSeller,
    addlikedItemSeller, removelikedItemSeller };
