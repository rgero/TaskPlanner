import express, {Router, Request, Response} from "express";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const router:Router = express.Router();
const User = mongoose.model("User");

const secretKey:string = process.env.CRED_KEY as string;

router.post ('/signup', async (req:Request, res:Response)=> {
    try {
        const {email, displayName, password} = req.body
        const user = new User({email, password, displayName});
        await user.save();
    
        const token = jwt.sign({userId: user._id}, secretKey);

        return res.send({ token, email, displayName });

    } catch (err)
    {
        if (err instanceof Error)
        {
            return res.status(422).send(err.message);
        }
        return res.status(422).send("Something went wrong");
    }
})


router.post(`/signin`, async (req:Request, res:Response) => {
    const {email, password} = req.body;

    if (!email || !password)
    {
        return res.status(422).send({error: "Must provide an email and password"});
    }

    const user = await User.findOne({email});
    if (!user)
    {
        return res.status(422).send({error: "Invalid email or password"});
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, secretKey)

        const response = {
            token: token,
            displayName: user.displayName,
            email: user.email
        }
        return res.send(response)

    } catch (err)
    {
        return res.status(422).send({error: "Invalid email or password"})
    }

})

router.post(`/change`, async (req:Request, res:Response) => {
    const {email, password, changes} = req.body;

    if (!email || !password || !changes)
    {
        return res.status(422).send({error: "Request not full"});
    }

    if (Object.keys(changes).length == 0)
    {
        return res.status(422).send({error: "Request not full"});
    }

    const user = await User.findOne({email});
    if (!user)
    {
        return res.status(422).send({error: "Invalid email or password"});
    }

    try {
        await user.comparePassword(password);

        if (changes.email)
        {
            user.email = changes.email;
        }

        if (changes.password)
        {
            user.password = changes.password;
        }

        if (changes.displayName)
        {
            user.displayName = changes.displayName;
        }

        await user.save();

        // Return the user data.
        const token = jwt.sign({userId: user._id}, secretKey)
        const response = {
            token: token,
            displayName: user.displayName,
            email: user.email
        }
        return res.send(response);
    } catch (err)
    {
        return res.status(422).send({error: "Invalid email or password"})
    }
})

export default router;