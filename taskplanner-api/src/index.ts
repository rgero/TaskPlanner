import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";


const app:Express = express();

app.get("/", (req:Request, res:Response) => {
    res.send("HELLO ROYMOND");
});

dotenv.config();

const port = process.env.PORT;
app.listen(port);
