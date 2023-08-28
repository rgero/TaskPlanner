import {body, ValidationChain} from 'express-validator';

export const createUserValidator: ValidationChain[] = [
    body('email').not().isEmpty().withMessage("Email is Mandatory").trim().isEmail(),
    body('password').not().isEmpty().withMessage("Password is Mandatory").isString(),
    body('displayName').trim().isString().withMessage("Display Name is Mandatory"),
];

export const signInValidator: ValidationChain[] = [
    body('email').not().isEmpty().withMessage("Email is Mandatory").trim().isEmail(),
    body('password').not().isEmpty().withMessage("Password is Mandatory").isString(),
]

