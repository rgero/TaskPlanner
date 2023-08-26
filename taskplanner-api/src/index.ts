import './models/User';
import './models/Task';

import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';

import mongoose from './mongooseStarter';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import requireAuth from './middlewares/requireAuth';

dotenv.config();
const port = process.env.PORT;

mongoose.start();
const app:Express = express();
app.use(bodyParser.json());
app.use(cors());
app.use(authRoutes);
app.use(taskRoutes);

app.get("/", (req:Request, res:Response) => {
    res.send("HELLO ROYMOND");
});

app.get('/test', requireAuth, (req:Request, res:Response) => {
    res.send(`Your e-mail: ${req.user.email}`);
})

app.listen(port, ()=>{
    console.log(`Server started, listening on port ${port}`);
})