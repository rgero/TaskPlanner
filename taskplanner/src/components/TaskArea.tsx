import React, {FC, ReactElement} from 'react';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import { Alert, Box, Grid, Snackbar } from '@mui/material';

import taskplannerAPI from '../api/taskplanner.api';
import TaskStats from './taskDisplay/TaskStats';
import TaskList from './taskDisplay/TaskList';

const TaskArea:FC = ():ReactElement  => {

    const {error, isLoading, data, refetch} = useQuery("tasks", async () => { return await taskplannerAPI.get('/tasks');});
    const taskData = data?.data;

    return (
        <Grid item md={8} px={4}>
            <Box mb={8} px={4}>
                <h2>
                    Status Of Your Tasks on{' '}{format(new Date(), 'PPPP')}
                </h2>
            </Box>
            <Grid container display="flex" justifyContent="center">
                <TaskStats tasks={taskData} />
                <TaskList tasks={taskData} />
            </Grid>

            <Snackbar
                open={error ? true : false}
                autoHideDuration={5000}
            >
                <Alert severity="error">
                    There was an error fetching the tasks.
                </Alert>
            </Snackbar>

            { !error && Array.isArray(data) && data?.length == 0 && <div>FAILURE</div>}

            <Snackbar
                open={ (!isLoading && !error && Array.isArray(taskData) && taskData.length == 0) ? true : false}
                autoHideDuration={5000}
            >
                <Alert severity="warning">
                    No tasks listed, please make new ones.
                </Alert>
            </Snackbar>

        </Grid>

    )
}

export default TaskArea