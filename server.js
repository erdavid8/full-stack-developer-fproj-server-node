import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import userController from "./controllers/user-controller.js";
import petController from "./controllers/pet-controller.js";

//'mongodb+srv://dbUser:dbUser@cluster0.xdgpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//'mongodb://localhost:27017/webdev'
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.xdgpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')});
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development! Final Project')});
app.use(express.json());
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit: '50mb'
}))
userController(app);
petController(app);
app.listen(process.env.PORT || 4000);