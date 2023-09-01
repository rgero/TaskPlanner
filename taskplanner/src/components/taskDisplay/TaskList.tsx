import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import TaskCard from './taskCard/TaskCard';
import { ITaskList } from './interfaces/ITaskList';

const TaskList:FC<ITaskList> = (props):ReactElement  => {
  const {tasks} = props;
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
              return  <TaskCard key={index} 
                                id={each.id} 
                                title={each.title} 
                                description={each.description}
                                date={each.date ? new Date(each.date) : new Date()}
                                priority={each.priority}
                                status={each.status}
                      />
            })
          }
        </>
      </Grid>
  )
}

export default TaskList