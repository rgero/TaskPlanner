import React, {createContext, FC, PropsWithChildren, ReactElement} from 'react';

export const TaskStatusChangedContext = createContext(
    {
        updated: false,
        toggle: ()=>{return},
    }
)

export const TaskStatusChangedContextProvider:FC<PropsWithChildren> = (props): ReactElement => 
{
    const [updated, setUpdated] = React.useState(false);

    const toggleHandler = () => {
        updated? setUpdated(false): setUpdated(true);
    }

    return (
        <TaskStatusChangedContext.Provider value={{updated: updated, toggle: toggleHandler}}>
            {props.children}
        </TaskStatusChangedContext.Provider>
    )
}