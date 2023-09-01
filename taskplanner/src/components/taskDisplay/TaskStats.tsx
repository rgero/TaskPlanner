import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import TaskCounter from './TaskCounter';
import { Status } from '../createTasks/enums/Status';
import { ITaskList } from './interfaces/ITaskList';
import { ProcessTaskPriorities } from './helpers/CountTasks';

const TaskStats:FC<ITaskList> = (props):ReactElement  => {

  const {tasks} = props;

  const processedValues = ProcessTaskPriorities(tasks);

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
        <TaskCounter status={Status.todo} count={processedValues.todo}/>
        <TaskCounter status={Status.inProgress} count={processedValues.inProgress}/>
        <TaskCounter status={Status.done} count={processedValues.done}/>
      </Grid>
  )
}

export default TaskStats