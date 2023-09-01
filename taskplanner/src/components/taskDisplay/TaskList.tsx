import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import TaskCard from './taskCard/TaskCard';
import { ITaskList } from './interfaces/ITaskList';
import { Status } from '../createTasks/enums/Status';

const TaskList:FC<ITaskList> = (props):ReactElement  => {
  const {tasks, onStatusChange, onClick} = props;
  return (
      <Grid
        item
        display="flex"
        flexDirection="column"
        xs={10}
        md={8}
      >
        <>
          {Array.isArray(tasks) 
            && tasks.length != 0 
            && tasks.map((each, index) => 
            {

              return each.status === Status.todo || each.status == Status.inProgress ?
                ( <TaskCard key={index} 
                                id={each.id} 
                                title={each.title} 
                                description={each.description}
                                date={each.date ? new Date(each.date) : new Date()}
                                priority={each.priority}
                                status={each.status}
                                onStatusChange={onStatusChange}
                                onClick={onClick}
                      />
                ) : (null)
            })
          }
        </>
      </Grid>
  )
}

export default TaskList