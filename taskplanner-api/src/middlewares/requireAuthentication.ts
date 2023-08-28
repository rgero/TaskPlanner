import {Request, Response, NextFunction} from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

import { AppDataSource } from "../index";
import { User } from "../users/users.entity";

interface CustomRequest extends Request {
    userId: string | JwtPayload;
}

dotenv.config();

export const requireAuthentication = async (req:Request, res:Response, next:NextFunction) => {
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
        const user = await AppDataSource.getRepository(User).findOne({
            where: {
                id: userId as string
            }
        });

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