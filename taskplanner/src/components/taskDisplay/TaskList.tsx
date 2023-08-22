import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import TaskCard from './taskCard/TaskCard';

const TaskList:FC = ():ReactElement  => {
    return (
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
        </Grid>
    )
}

export default TaskList