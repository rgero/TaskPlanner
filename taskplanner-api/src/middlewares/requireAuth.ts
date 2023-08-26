import {Request, Response, NextFunction} from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const User = mongoose.model('User');

export interface CustomRequest extends Request {
    userId: string | JwtPayload;
}

export default async (req:Request, res:Response, next:NextFunction) => {
    const {authorization} = req.headers;
    const secretKey:string = process.env.CRED_KEY as string;

    if (!authorization)
    {
        return res.status(401).send({error: "You must be logged in"});
    }

    const token = authorization.replace("Bearer ", "");
    try {
        const decoded = jwt.verify(token, secretKey);
        const {userId} = decoded as CustomRequest;
        const user = await User.findById(userId);

        if (!user)
        {
            return res.status(401).send({error: "You must be logged in"});
        }
        req.user = user;
        return next();
    }
    catch (error){
        return res.status(401).send({error: "Error"});
    }    
}