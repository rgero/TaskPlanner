import React, {FC, ReactElement} from 'react';
import { format } from 'date-fns';

import { Box, Grid } from '@mui/material';
import TaskStats from './taskDisplay/TaskStats';
import TaskList from './taskDisplay/TaskList';

const TaskArea:FC = ():ReactElement  => {
    return (
        <Grid item md={8} px={4}>
            <Box mb={8} px={4}>
                <h2>
                    Status Of Your Tasks on{' '}{format(new Date(), 'PPPP')}
                </h2>
            </Box>
            <Grid container display="flex" justifyContent="center">
                <TaskStats/>
                <TaskList/>
            </Grid>
        </Grid>
    )
}

export default TaskArea