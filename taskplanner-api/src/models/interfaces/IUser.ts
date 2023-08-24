import { Document } from "mongoose";

export default interface IUser extends Document {
    displayName: string,
    email: string,
    password: string,
}