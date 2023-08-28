import {Request, Response, NextFunction} from 'express';
import { validationResult, ValidationChain, Result } from 'express-validator';

export const runValidator = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (const validation of validations) {
            const result:Result = await validation.run(req);
            if (!result.isEmpty()) 
            {
                break;
            }
        }

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};