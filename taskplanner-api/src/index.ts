import './models/User';

import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';

import mongoose from './mongooseStarter';
import authRoutes from './routes/authRoutes';

dotenv.config();
const port = process.env.PORT;

mongoose.start();
const app:Express = express();
app.use(bodyParser.json());
app.use(cors());
app.use(authRoutes);

app.get("/", (req:Request, res:Response) => {
    res.send("HELLO ROYMOND");
});

app.listen(port, ()=>{
    console.log(`Server started, listening on port ${port}`);
})