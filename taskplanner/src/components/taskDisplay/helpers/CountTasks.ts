import { Status } from "../../createTasks/enums/Status";
import { IProcessedTasks } from "../interfaces/IProcessedTasks";
import { ITaskCard } from "../taskCard/interfaces/ITaskCard";

export const ProcessTaskPriorities = (tasks: ITaskCard[]):IProcessedTasks =>
{
    const processValues:IProcessedTasks = {
        todo: 0,
        inProgress: 0,
        done: 0
    }

    if (Array.isArray(tasks) && tasks.length != 0)
    {
        tasks.map((each)=> {
            switch(each.status)
            {
              case Status.todo:
                processValues.todo++;
                break;
              case Status.inProgress:
                processValues.inProgress++;
                break;
              case Status.done:
                processValues.done++;
                break;
            }
          })
    }
    return processValues;
}