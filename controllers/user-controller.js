// import users from "./users/users.js";
import userDao from '../controllers/dbase/users/user-dao.js';

const userController = (app) => {
    app.post('/api/user', createProfile);
    app.get('/api/user/:uid', findProfileById);
    app.get('/api/user/email/:email', findProfileByEmail);
    app.get('/api/user', findAllProfile);
    app.delete('/api/user/:uid', deleteProfile);
    app.put('/api/user/:uid', addlikedItem);
}


// create new profile(somewhat same as signup)
const createProfile = async (req, res) => {
    const user = req.body;
    const type = req.params.type;
    let insertUser;

    if (type === 'admin') {
        insertUser = await userDao.createProfileAdmin(user);
    } else if (type === 'buyer') {
        insertUser = await userDao.createProfileBuyer(user);
    } else { // seller
        insertUser = await userDao.createProfileSeller(user);
    }

    res.json(insertUser);
}

// find user using ID
const findProfileById = async (req, res) => {
    const userId = req.params.uid;
    const user = await userDao.findProfileByIdSeller(userId);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user by email
const findProfileByEmail = async (req, res) => {
    const userEmail = req.params['email'];
    const user = await userDao.findProfileByEmailSeller(userEmail);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find all users
const findAllProfile = async (req, res) => {

    //const check = req.body;
    const type = req.params.type;
    console.log(type);

    const user = await userDao.findAllProfileSeller();
    //console.log(user);
    res.json(user);
}

// delete user profile
const deleteProfile = async (req, res) => {
    const userId = req.params.uid;
    const userDel = await userDao.deleteProfileSeller(userId);

    res.json(userDel);
}

/*
// do not use for now - not updated
const updateProfile = (req, res) => {
    const userId = req.params.uid;
    console.log(userId);
    const user = users.find(u => u._id === userId);                     // get the object with specific _id
    const updatedUser = req.body;                                        // new updated user embedded in HTTP request body
    updatedUser.username = "Michael";
    updatedUser.office = "LV426";
    console.log(user);
    console.log(updatedUser);
    //users = users.map(u => u._id === userId? updateUser : u);
    Object.assign(user, updatedUser);                                    // assign new values to existing
    res.sendStatus(200);
}
*/

const addlikedItem = async (req, res) => {
    //const item = req.body
    const item = "14344";
    console.log(item);
    console.log("item here")
    const userID = req.params.uid;
    console.log(userID);
    const status = "none";
//    const status = await userDao.addlikedItem(userID, item);
    res.json(status);
}

export default userController;