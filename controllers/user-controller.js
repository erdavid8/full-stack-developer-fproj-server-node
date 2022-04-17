import users from "./users/users.js";

const userController = (app) => {
    app.post('/api/user', createProfile);
    app.get('/api/user/:uid', findProfileById);
    app.get('/api/user', findAllProfile);
    app.delete('/api/user/:uid', deleteProfile);
    app.put('/api/user/:uid', updateProfile);
}

const createProfile = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    newUser.username = "andrew";
    newUser.type = "buyer";
    console.log(newUser)
    users.push(newUser);
    res.json(newUser);
}

const findProfileById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findAllProfile = (req, res) => {
    res.json(users);
}

const deleteProfile = (req, res) => {
    const userId = req.params.uid;
    const usersIndex = users.findIndex(u => u._id === userId);          // find index of user
    users.splice(usersIndex, 1)                               // delete user
    res.sendStatus(200);
}

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