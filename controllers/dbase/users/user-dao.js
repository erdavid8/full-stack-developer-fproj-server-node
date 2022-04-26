import userAdminModel from "./user-admin-model.js";
import userBuyerModel from "./user-buyer-model.js";
import userSellerModel from "./user-seller-model.js";

// admin DAO
const findAllProfileAdmin = () => userAdminModel.find();
const findProfileByIdAdmin = (id) => userAdminModel.findById(id);
const findProfileByEmailAdmin = (email) => userAdminModel.findOne({email});
const createProfileAdmin = (user) => userAdminModel.insertMany(user);
const deleteProfileAdmin = (id) => userAdminModel.deleteOne({_id: id})

// const updateUserAdmin = (id) => userAdminModel.replaceOne({_id: id}, )
const updateUserSeller = (id, replacement) => userSellerModel.updateOne({_id: id}, replacement)

// buyer DAO
const findAllProfileBuyer = () => userBuyerModel.find();
const findProfileByIdBuyer = (id) => userBuyerModel.findById(id);
const findProfileByEmailBuyer = (email) => userBuyerModel.findOne({email});
const createProfileBuyer = (user) => userBuyerModel.insertMany(user);
const deleteProfileBuyer = (id) => userBuyerModel.deleteOne({_id: id})
const addlikedItemBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$addToSet: {likedItems: item}})        // add like
const removelikedItemBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$pullAll: {likedItems: item}})      // remove like
const adoptBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$addToSet: {adoptedItems: item}})      // add post
const unadoptBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$pullAll: {adoptedItems: item}})       // remove post
const followBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$addToSet: {following: item}})               // follow
const unfollowBuyer = (id, item) => userBuyerModel.updateOne({_id: id}, {$pullAll: {following: item}})              // unfollow

// seller DAO
const findAllProfileSeller = () => userSellerModel.find();
const findProfileByIdSeller = (id) => userSellerModel.findById(id);
const findProfileByEmailSeller = (email) => userSellerModel.findOne({email});
const createProfileSeller = (user) => userSellerModel.insertMany(user);
const deleteProfileSeller = (id) => userSellerModel.deleteOne({_id: id})
const addlikedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$addToSet: {likedItems: item}})      // add like
const removelikedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$pullAll: {likedItems: item}})    // remove like
const postedItemsSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$addToSet: {postedItems: item}})      // add post
const unpostedItemSeller = (id, item) => userSellerModel.updateOne({_id: id}, {$pullAll: {postedItems: item}})      // remove post
const updateNameSeller = (id, new_name) => userSellerModel.findOneAndUpdate({_id: id}, {name: new_name})            // change seller name
const updateEmailSeller = (id, new_email) => userSellerModel.findOneAndUpdate({_id: id}, {email: new_email})
const updatePasswordSeller = (id, new_password) => userSellerModel.findOneAndUpdate({_id: id}, {password: new_password})
const updatePhoneSeller = (id, new_phone) => userSellerModel.findOneAndUpdate({_id: id}, {phone: new_phone})

export default {findAllProfileAdmin, findProfileByIdAdmin, findProfileByEmailAdmin,
    createProfileAdmin, deleteProfileAdmin, findAllProfileBuyer, findProfileByIdBuyer,
    createProfileBuyer, findProfileByEmailBuyer, deleteProfileBuyer, addlikedItemBuyer, removelikedItemBuyer,
    findAllProfileSeller, findProfileByIdSeller, findProfileByEmailSeller, createProfileSeller, deleteProfileSeller,
    addlikedItemSeller, removelikedItemSeller, postedItemsSeller, unpostedItemSeller, followBuyer, unfollowBuyer,
    adoptBuyer, unadoptBuyer, updateNameSeller, updateEmailSeller, updatePasswordSeller, updatePhoneSeller,
    updateUserSeller};
