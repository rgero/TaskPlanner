import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import TaskCounter from './TaskCounter';
import { Status } from '../createTasks/enums/Status';

const TaskStats:FC = ():ReactElement  => {
    return (
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} count={10}/>
          <TaskCounter status={Status.inProgress} count={10}/>
          <TaskCounter status={Status.done} count={10}/>
        </Grid>
    )
}

export default TaskStats