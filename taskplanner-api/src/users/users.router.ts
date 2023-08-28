import { Request, Response, Router } from 'express';
import { createUserValidator } from './users.validator';
import { usersController } from './users.controller';

/*Fire the router function*/
export const usersRouter: Router = Router();

// Create a default route.
usersRouter.get('/users', (req: Request, res: Response) => {
  res.send('USERS!');
});

usersRouter.post('/signup', createUserValidator, usersController.SignUp);
