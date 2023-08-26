import express, {Router, Request, Response} from "express";
import mongoose from 'mongoose';
import requireAuth from "../middlewares/requireAuth";

const Task = mongoose.model("Task");

const router:Router = express.Router();
router.use(requireAuth);

router.get('/tasks', async (req:Request, res:Response) => {
    const tasks = await Task.find({userId: req.user._id});
    res.send(tasks);
})

export default router;