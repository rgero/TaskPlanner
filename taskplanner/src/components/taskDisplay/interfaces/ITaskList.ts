import { ITaskCard } from "../taskCard/interfaces/ITaskCard";

export interface ITaskList 
{
    tasks: ITaskCard[],
    onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}