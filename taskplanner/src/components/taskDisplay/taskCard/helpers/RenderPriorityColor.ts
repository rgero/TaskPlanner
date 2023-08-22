import { Priority } from "../../../createTasks/enums/Priority";

export const RenderPriorityBorderColor = (priority:string): string => {
    switch(priority)
    {
        case Priority.normal:
            return 'grey.900';
        case Priority.low:
            return 'info.light';
        case Priority.high:
            return "warning.light";
        default:
            return 'grey.900';
    }
}