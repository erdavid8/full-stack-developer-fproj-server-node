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
const addlikedItemBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$addToSet: {likedItems: item}})
const removelikedItemBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$pull: {likedItems: item}})
const addPostedItemBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$addToSet: {postedItems: item}})
const removePostedItemBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$pull: {postedItems: item}})

// seller DAO
const findAllProfileSeller = () => userSellerModel.find();
const findProfileByIdSeller = (id) => userSellerModel.findById(id);
const findProfileByEmailSeller = (email) => userSellerModel.findOne({email});
const createProfileSeller = (user) => userSellerModel.insertMany(user);
const deleteProfileSeller = (id) => userSellerModel.deleteOne({_id: id})
const addlikedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$addToSet: {likedItems: item}})
const removelikedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$pullAll: {likedItems: item}})
const postedItemsSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$addToSet: {postedItems: item}})
const unpostedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$pullAll: {postedItems: item}})
//const followSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$addToSet: {following: item}})
//const unfollowSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$pullAll: {following: item}})

export default {findAllProfileAdmin, findProfileByIdAdmin, findProfileByEmailAdmin,
    createProfileAdmin, deleteProfileAdmin, findAllProfileBuyer, findProfileByIdBuyer,
    createProfileBuyer, findProfileByEmailBuyer, deleteProfileBuyer, addlikedItemBuyer, removelikedItemBuyer,
    addPostedItemBuyer, removePostedItemBuyer, findAllProfileSeller, findProfileByIdSeller, findProfileByEmailSeller,
    createProfileSeller, deleteProfileSeller, addlikedItemSeller, removelikedItemSeller, postedItemsSeller,
    unpostedItemSeller };
