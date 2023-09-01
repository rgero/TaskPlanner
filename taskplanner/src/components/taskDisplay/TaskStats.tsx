import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import TaskCounter from './TaskCounter';
import { Status } from '../createTasks/enums/Status';
import { ITaskList } from './interfaces/ITaskList';

const TaskStats:FC<ITaskList> = (props):ReactElement  => {

  const {tasks} = props;

  let todoCount = 0;
  let inProgressCount = 0;
  let doneCount = 0;

  if (Array.isArray(tasks) && tasks.length != 0){
    tasks.map((each)=> {
      switch(each.status)
      {
        case Status.todo:
          todoCount++;
          break;
        case Status.inProgress:
          inProgressCount++;
          break;
        case Status.done:
          doneCount++;
          break;
      }
    })
  }

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
        <TaskCounter status={Status.todo} count={todoCount}/>
        <TaskCounter status={Status.inProgress} count={inProgressCount}/>
        <TaskCounter status={Status.done} count={doneCount}/>
      </Grid>
  )
}

export default TaskStats