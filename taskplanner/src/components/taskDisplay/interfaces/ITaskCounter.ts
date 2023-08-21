import { Status } from "../../createTasks/enums/Status";

export type TaskCounterStatusType = Status.todo |Status.inProgress | Status.done;

export interface ITaskCounter 
{
    count?: number;
    status?: TaskCounterStatusType;
}