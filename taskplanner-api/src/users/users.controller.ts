import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import { AppDataSource } from '../index';
import { User } from "./users.entity";

dotenv.config();
const secretKey:string = process.env.CRED_KEY as string;

class UsersController 
{
    public async SignUp(req: Request, res: Response): Promise<Response>
    {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
          return res.status(500).json({errors: errors.array()});
        }

        const newUser:User = new User();
        newUser.displayName = req.body.displayName;
        newUser.email = req.body.email;
        newUser.password = await bcrypt.hash(req.body.password, 10);

        console.log(newUser.password);

        // Save the user, sign the token, send it back
        try {
            const createdUser = await AppDataSource.getRepository(User).save(newUser);
            const token = jwt.sign({userId: createdUser.id}, secretKey)
            
            const response = {
                token: token,
                email: createdUser.email,
                displayName: createdUser.displayName
            }

            return res.status(201).json(response);
        } catch (errors)
        {
            console.log(errors)
            return res.status(500).json({error: "Internal Server Error"});
        }
    }

    // public async SignIn(req: Request, res: Response): Promise<Response>
    // {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty())
    //     {
    //       return res.status(400).json({errors: errors.array()});
    //     }
    // }

    // public async ChangeDetails(req: Request, res: Response): Promise<Response>
    // {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty())
    //     {
    //       return res.status(400).json({errors: errors.array()});
    //     }
    // }
}

export const usersController = new UsersController();