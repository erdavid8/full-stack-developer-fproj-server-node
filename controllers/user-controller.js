import users from "./users/users.js";

const userController = (app) => {
    app.post('/api/user', createProfile);
    app.get('/api/user/:uid', findProfileById);
    app.get('/api/user/email/:email', findProfileByEmail);
    app.get('/api/user', findAllProfile);
    app.delete('/api/user/:uid', deleteProfile);
    app.put('/api/user/:uid', updateProfile);
}

// create new profile(somewhat same as signup)
const createProfile = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    newUser.name = "Gilbert Repato";
    newUser.email = "gilbert@yahoo.com";
    newUser.password = "987654";
    newUser.phone = "(978)-9876543";
    newUser.type = "seller";
    newUser.likedItems = ["123", "234", "789"];
    newUser.postedItems = ["234"];
    newUser.adoptedItems = ["789", "123"];
    newUser.following = ["123", "567"];
    console.log(newUser)
    users.push(newUser);
    res.json(newUser);
}

// find user using ID
const findProfileById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);

    if (user) {
        res.json(user);                                     // user is in database
    } else {
        res.sendStatus(404);                                // user not found
    }
}

// find user by email
const findProfileByEmail = (req, res) => {
    const userEmail = req.params['email'];
    const user = users.find(u => u.email === userEmail);

    if (user) {
        res.json(user);                                     // user is in database
    } else {
        res.sendStatus(404);                                // user not found
    }
}

// find user by credentials - IN-PROGRESS
const findProfileByCredentials = (req, res) => {
    const credentials = req.body;
    const {email, password} = credentials;
}

// find all users
const findAllProfile = (req, res) => {
    res.json(users);
}

// delete user profile
const deleteProfile = (req, res) => {
    const userId = req.params.uid;
    const usersIndex = users.findIndex(u => u._id === userId);          // find index of user
    users.splice(usersIndex, 1)                               // delete user
    res.sendStatus(200);
}



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

export default userController;