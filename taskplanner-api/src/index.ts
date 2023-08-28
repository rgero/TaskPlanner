import express, {Express, Request, Response} from "express";
import { DataSource } from 'typeorm';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { Task } from "./tasks/tasks.entity";
import { User } from "./users/users.entity";
import { usersRouter } from "./users/users.router";
import { tasksRouter } from "./tasks/tasks.router";

// Instantiate express app
const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
app.use(usersRouter);
app.use(tasksRouter);

dotenv.config();
const port = process.env.PORT;

// Create Database Connection
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: 2777,
    username: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [Task, User],
    synchronize: false,
});

// Create a default route.
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

AppDataSource.initialize().then(() => 
    {
        // Start listenting to the requests on the defined port
        app.listen(port);
        console.log('Data Source has been initialized!');
    }).catch((err) => 
    {
        console.error(
        'Error during Data Source initialization',
        err,
        );
    }
);
  