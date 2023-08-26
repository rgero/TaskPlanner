import express, {Router, Request, Response} from "express";
import mongoose from 'mongoose';
import requireAuth from "../middlewares/requireAuth";

const Task = mongoose.model("Task");

const router:Router = express.Router();
router.use(requireAuth);

router.get('/tasks', async (req:Request, res:Response) => {
    const tasks = await Task.find({userId: req.user._id});
    return res.send(tasks);
})

router.get('/tasks/:taskID', async (req:Request,res:Response) => {
    try {
        const taskID = new mongoose.Types.ObjectId(req.params.taskID);
        const currentUser = req.user._id;
        const task = await Task.findOne({_id: taskID, userId: currentUser});
        if (task)
        {
            return res.send(task);
        } else {
            return res.status(500).send("Invalid Request");
        }
    } catch (err)
    {
        console.log(err);
        return res.status(500).send(err.message);
    }
})

router.delete('/tasks/:taskID', async (req:Request, res:Response) => {
    try { 
        const taskID = new mongoose.Types.ObjectId(req.params.taskID);
        const task = await Task.findOneAndDelete({_id: taskID, userId: req.user._id});
        if (task == null)
        {
            throw Error("Task not found");
        }
        return res.send("Task deleted");
    } catch (err)
    {
        return res.status(422).send({error:err.message});
    }
})

router.put('/tasks/:taskID', async (req:Request, res:Response) => {
    try { 
        const currentUser = req.user._id;
        const taskID = req.params.taskID;
        const task = await Task.findOneAndUpdate({_id: taskID, userId: currentUser}, req.body, {new: true})
        return res.send(task);
    } catch (err)
    {
        return res.status(422).send({error:err.message});
    }
})

router.post('/tasks', async (req:Request, res:Response) => {
    const {title, description, date, priority, status} = req.body;
    if (!title)
    {
        return res.status(422).send({error: "You must provide a task title"});
    }

    try {
        const task = new Task({title, description, date, priority, status, userId: req.user._id})
        await task.save();
        return res.send(task);
    } catch (err)
    {
        return res.status(422).send({error:err.message});
    }
})

export default router;