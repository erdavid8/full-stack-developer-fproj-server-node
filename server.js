import express from 'express';
import cors from 'cors'
import userController from "./controllers/user-controller.js";

const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')});
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development! Final Project')});
app.use(express.json());
app.use(cors());
userController(app);
app.listen(process.env.PORT || 4000);