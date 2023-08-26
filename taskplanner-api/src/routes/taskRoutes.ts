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

router.get('/tasks/:taskID', async (req,res) => {
    try {
        const taskID = new mongoose.Types.ObjectId(req.params.taskID);
        const currentUser = req.user._id;
        const task = await Task.findOne({_id: taskID, userId: currentUser});
        if (task)
        {
            res.send(task);
        } else {
            res.status(500).send("Invalid Request");
        }
    } catch (err)
    {
        console.log(err);
        res.status(500).send(err.message);
    }
})

router.delete('/tasks/:taskID', async (req, res) => {
    try { 
        const taskID = new mongoose.Types.ObjectId(req.params.taskID);
        const task = await Task.findOneAndDelete({_id: taskID, userId: req.user._id});
        if (task == null)
        {
            throw Error("Task not found");
        }
        res.send("Task deleted");
    } catch (err)
    {
        res.status(422).send({error:err.message});
    }
})

export default router;