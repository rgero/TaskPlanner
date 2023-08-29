import { Request, Response } from 'express';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { validationResult } from 'express-validator';

import { AppDataSource } from '../index';
import { Task } from './tasks.entity';
import { UpdateResult } from 'typeorm';

class TasksController {
    public async getAll(req: Request, res: Response): Promise<Response> {
        let allTasks:Task[];
        try {
            allTasks = await AppDataSource.getRepository(Task).find({
                where: {
                    user: req.user
                },
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
        
        // There might be a better way to do this.
        if(req.user)
        {
            newTask.user = req.user;
        }

        //let createdTask: Task;
        try {
            // Removing this because I need to figure out how to not send the whole user back.
            //createdTask = await AppDataSource.getRepository(Task).save(newTask);
            // const plainTask = instanceToPlain(createdTask) as Task;

            
            await AppDataSource.getRepository(Task).save(newTask);
            return res.status(201).send("Task added");
        } catch (errors)
        {
            console.log(errors);
            return res.status(500).json({error: "Internal Server Error"});
        }
    }

    public async update(req: Request, res: Response): Promise<Response> 
    {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
          return res.status(400).json({errors: errors.array()});
        }
        
        // Try to find if the tasks exists
        let task: Task | null;

        try {
            task = await AppDataSource.getRepository(Task).findOne({
                where: { id: req.body.id, user: req.user }
            });
        } catch (errors) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }

        // Return 400 if task is null
        if (!task) {
            return res.status(404).json({error: 'The task with given ID does not exist'});
        }

        // Declare a variable for updatedTask
        let updatedTask: UpdateResult;

        // Update the task
        try {
            updatedTask = await AppDataSource.getRepository(Task).update(req.body.id, plainToInstance(Task, req.body));

            // Convert the updatedTask instance to an object
            updatedTask = instanceToPlain(updatedTask) as UpdateResult;
            return res.json(updatedTask).status(200);
        } catch (errors) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    }
}

export const tasksController = new TasksController();