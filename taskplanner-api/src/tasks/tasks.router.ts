import { Router } from 'express';

import { tasksController } from './tasks.controller';
import { createValidator, updateValidator } from './tasks.validator';
import { runValidator } from '../middlewares/runValidator';
import { requireAuthentication } from '../middlewares/requireAuthentication';

/*Fire the router function*/
export const tasksRouter: Router = Router();

// ROUTES
tasksRouter.get('/tasks', requireAuthentication, tasksController.getAll);
tasksRouter.post('/tasks', [requireAuthentication, runValidator(createValidator)], tasksController.create);
tasksRouter.put('/tasks', [requireAuthentication, runValidator(updateValidator)], tasksController.update);