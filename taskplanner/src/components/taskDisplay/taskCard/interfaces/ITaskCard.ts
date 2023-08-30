import { ITaskHeader } from "./ITaskHeader";
import { ITaskDescription } from "./ITaskDescription";
import { ITaskFooter } from "./ITaskFooter";

export interface ITaskCard extends ITaskHeader, ITaskDescription, ITaskFooter
{
    priority?: string;
}