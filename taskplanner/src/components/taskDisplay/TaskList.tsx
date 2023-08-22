import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import TaskCard from './taskCard/TaskCard';
import { Priority } from '../createTasks/enums/Priority';

const TaskList:FC = ():ReactElement  => {
    return (
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <TaskCard priority={Priority.high}/>
          <TaskCard priority={Priority.low}/>
          <TaskCard/>
          <TaskCard/>
        </Grid>
    )
}

export default TaskList