import { Document, Types } from "mongoose";
import { Priority } from "../../enums/Priority";
import { Status } from "../../enums/Status";

export default interface ITask extends Document {
    userId: Types.ObjectId,
    title: string,
    description?: string,
    date?: Date,
    priority?: Priority,
    status?: Status
}