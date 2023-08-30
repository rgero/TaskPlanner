import React, {FC, ReactElement} from 'react';
import { Alert, AlertTitle, Box, Button, LinearProgress, Stack, Typography } from '@mui/material';
import { useMutation } from 'react-query';

import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import TaskTitleField from './components/taskTitleField';
import TaskDescriptionField from './components/taskDescriptionField';
import TaskDateField from './components/taskDateField';
import TaskSelectField from './components/taskSelectField';

import taskplannerAPI from '../../api/taskplanner.api';
import { ICreateTask } from './intefaces/ICreateTask';

const statusOptions = [
    {
        value: Status.todo,
        label: "To Do"
    },
    {
        value: Status.inProgress,
        label: "In Progress"
    },
    {
        value: Status.done,
        label: "Done"
    },
]

const priorities = [
    {
        value: Priority.low,
        label: "Low"
    },
    {
        value: Priority.normal,
        label: "Normal"
    },
    {
        value: Priority.high,
        label: "High"
    },
]


const CreateTask:FC = ():ReactElement  => {
    const [title, setTitle] = React.useState<string|undefined>(undefined);
    const [description, setDescription] = React.useState<string|undefined>(undefined);
    const [date, setDate] = React.useState<Date|null>( new Date() );
    const [status, setStatus] = React.useState<string>(statusOptions[0].value)
    const [priority, setPriority] = React.useState<string>(priorities[0].value)

    const createTaskMutation = useMutation((data:ICreateTask) => {
            return taskplannerAPI.post('/tasks', data);
        }
    )

    const createTaskHandler = () => 
    {
        if (!title || !description || !date)
        {
            return;
        }

        const task:ICreateTask = {
            title,
            description,
            date: date.toISOString().split('T')[0], // I hate this hack. Let's do DayJS later.
            status,
            priority
        }
        createTaskMutation.mutate(task);
    }   

    return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
                px={4}
                my={6}
            >
                <Alert severity='success' sx={{width: "100%", marginBottom:'16px'}}>
                    <AlertTitle>Success!</AlertTitle>
                    Task has been completed sucessfully
                </Alert>

                <Typography mb={2} component="h2" variant="h6">
                    Create A Task
                </Typography>

                <Stack sx={{ width: '100%' }} spacing={2}>
                    <TaskTitleField
                        onChange={(e)=> {setTitle(e.target.value)}}
                    />
                    <TaskDescriptionField
                        onChange={(e)=> {setDescription(e.target.value)}}
                    />
                    <TaskDateField
                        value={date}
                        onChange={(date)=> setDate(date)}
                    />
                    <Stack direction="row" sx={{ width: '100%' }} spacing={1}>
                        <TaskSelectField 
                            label="Status" 
                            value={status} 
                            options={statusOptions}
                            onChange={(e) => setStatus(e.target.value as string)}
                        />
                        <TaskSelectField 
                            label="Priority" 
                            value={priority}
                            options={priorities}
                            onChange={(e) => setPriority(e.target.value as string)}
                        />
                    </Stack>
                    <LinearProgress/>
                    <Button variant="contained" size="large" fullWidth onClick={createTaskHandler}>
                        Create a Task
                    </Button>
                </Stack>
            </Box>
    )
};


export default CreateTask;