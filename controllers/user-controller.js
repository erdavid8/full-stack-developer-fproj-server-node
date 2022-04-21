// import users from "./users/users.js";
import userDao from '../controllers/dbase/users/user-dao.js';

const userController = (app) => {
    //createProfile:
    app.post('/api/user-admin', createProfileAdmin);
    app.post('/api/user-buyer', createProfileBuyer);
    app.post('/api/user-seller', createProfileSeller);
    //findProfileById:
    app.get('/api/user-admin/:uid', findProfileByIdAdmin);
    app.get('/api/user-buyer/:uid', findProfileByIdBuyer);
    app.get('/api/user-seller/:uid', findProfileByIdSeller);
    //findProfileByEmail:
    app.get('/api/user-admin/email/:email', findProfileByEmailAdmin);
    app.get('/api/user-buyer/email/:email', findProfileByEmailBuyer);
    app.get('/api/user-seller/email/:email', findProfileByEmailSeller);
    //findAllProfile:
    app.get('/api/user-admin', findAllProfileAdmin);
    app.get('/api/user-buyer', findAllProfileBuyer);
    app.get('/api/user-seller', findAllProfileSeller);
    //delete:
    app.delete('/api/user-admin/:uid', deleteProfileAdmin);
    app.delete('/api/user-buyer/:uid', deleteProfileBuyer);
    app.delete('/api/user-seller/:uid', deleteProfileSeller);
    app.put('/api/user-seller/:uid', addlikedItem);
}


// create new profile(somewhat same as signup) admin
const createProfileAdmin = async (req, res) => {
    const user = req.body;
    const insertUser = await userDao.createProfileAdmin(user);

    res.json(insertUser);
}

// create new profile(somewhat same as signup) buyer
const createProfileBuyer = async (req, res) => {
    const user = req.body;
    const insertUser = await userDao.createProfileBuyer(user);

    res.json(insertUser);
}

// create new profile(somewhat same as signup) seller
const createProfileSeller = async (req, res) => {
    const user = req.body;
    const insertUser = await userDao.createProfileSeller(user);

    res.json(insertUser);
}

// find user admin using ID
const findProfileByIdAdmin = async (req, res) => {
    const userId = req.params.uid;
    const user = await userDao.findProfileByIdAdmin(userId);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user buyer using ID
const findProfileByIdBuyer = async (req, res) => {
    const userId = req.params.uid;
    const user = await userDao.findProfileByIdBuyer(userId);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user seller using ID
const findProfileByIdSeller = async (req, res) => {
    const userId = req.params.uid;
    const user = await userDao.findProfileByIdSeller(userId);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user admin by email
const findProfileByEmailAdmin = async (req, res) => {
    const userEmail = req.params['email'];
    const user = await userDao.findProfileByEmailAdmin(userEmail);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user buyer by email
const findProfileByEmailBuyer = async (req, res) => {
    const userEmail = req.params['email'];
    const user = await userDao.findProfileByEmailBuyer(userEmail);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user seller by email
const findProfileByEmailSeller = async (req, res) => {
    const userEmail = req.params['email'];
    const user = await userDao.findProfileByEmailSeller(userEmail);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find all users admin
const findAllProfileAdmin = async (req, res) => {
    const user = await userDao.findAllProfileAdmin();
    res.json(user);
}

// find all users buyer
const findAllProfileBuyer = async (req, res) => {
    const user = await userDao.findAllProfileBuyer();
    res.json(user);
}

// find all users seller
const findAllProfileSeller = async (req, res) => {
    const user = await userDao.findAllProfileSeller();
    res.json(user);
}

// delete profile admin
const deleteProfileAdmin = async (req, res) => {
    const userId = req.params.uid;
    const userDel = await userDao.deleteProfileAdmin(userId);

    res.json(userDel);
}

// delete profile admin
const deleteProfileBuyer = async (req, res) => {
    const userId = req.params.uid;
    const userDel = await userDao.deleteProfileBuyer(userId);

    res.json(userDel);
}

// delete profile seller
const deleteProfileSeller = async (req, res) => {
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
    const updateItem = "1234567";
    console.log(updateItem);
    const userID = req.params.uid;
    console.log(userID);

    const status = await userDao.addlikedItem(userID, updateItem);

    res.json(status);
}

export default userController;