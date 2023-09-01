import {body, ValidationChain} from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
    body('title').not().isEmpty().withMessage("Task Title is Mandatory").trim().isString(),
    body('date').not().isEmpty().withMessage("Task Date is Mandatory").isString(),
    body('description').trim().isString().withMessage("Description must be a string"),
    body('priority').trim().isIn([Priority.low, Priority.normal, Priority.high]).withMessage("You need a priority"),
    body('status').trim().isIn([Status.todo, Status.inProgress, Status.done]).withMessage("You need a status")
];

export const updateValidator: ValidationChain[] = [
    // Since I'm not doing an update for all the data, they need to be removed.
    body('id').not().isEmpty().withMessage("Task ID is mandatory").trim().isString().withMessage("ID needs to be a uuid format"),
    body('status').trim().isIn([Status.todo, Status.inProgress, Status.done]).withMessage("You need a status"),
]