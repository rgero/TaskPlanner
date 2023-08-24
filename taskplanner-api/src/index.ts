import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';

import mongoose from './mongooseStarter';

dotenv.config();
const port = process.env.PORT;

mongoose.start();
const app:Express = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req:Request, res:Response) => {
    res.send("HELLO ROYMOND");
});

app.listen(port, ()=>{
    console.log(`Server started, listening on port ${port}`);
})