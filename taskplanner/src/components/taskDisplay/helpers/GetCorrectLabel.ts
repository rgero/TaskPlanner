import { Status } from "../../createTasks/enums/Status"
import { TaskCounterStatusType } from "../interfaces/ITaskCounter"

export const getCorrectTitle = (status: TaskCounterStatusType): string => {
    switch(status)
    {
        case Status.todo:
            return 'To Do'
        case Status.inProgress:
            return 'In Progress';
        case Status.done:
            return 'Completed';
    }
}