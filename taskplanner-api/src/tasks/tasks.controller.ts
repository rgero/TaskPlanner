import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import { validationResult } from 'express-validator';

import { AppDataSource } from '../index';
import { Task } from './tasks.entity';

class TasksController {
    public async getAll(req: Request, res: Response): Promise<Response> {
        let allTasks:Task[];
        try {
            allTasks = await AppDataSource.getRepository(Task).find({
                order: {
                date: 'ASC',
                },
            });

            // Convert the tasks instance to an array of objects
            allTasks = instanceToPlain(allTasks) as Task[];
            return res.status(200).json(allTasks);
        } catch (errors) {
            return res.status(500).json({error: "Internal Server Error"});
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
          return res.status(400).json({errors: errors.array()});
        }

        const newTask:Task = new Task();
        newTask.title = req.body.title;
        newTask.date = req.body.date;
        newTask.description = req.body.description;
        newTask.priority = req.body.priority;
        newTask.status = req.body.status;

        let createdTask: Task;
        try {
            createdTask = await AppDataSource.getRepository(Task).save(newTask);
            const plainTask = instanceToPlain(createdTask) as Task;
            return res.status(201).json(plainTask);
        } catch (errors)
        {
            return res.status(500).json({error: "Internal Server Error"});
        }
    }
}

export const tasksController = new TasksController();