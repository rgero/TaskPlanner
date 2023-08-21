import { Status } from "../../createTasks/enums/Status"
import { TaskCounterStatusType } from "../interfaces/ITaskCounter"

export const getBorderColor = (status: TaskCounterStatusType): string => {
    switch(status)
    {
        case Status.todo:
            return 'error.light'
        case Status.inProgress:
            return 'warning.light';
        case Status.done:
            return 'success.light';
    }
}

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