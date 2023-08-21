import React, {FC, ReactElement} from 'react';
import { Box, SelectChangeEvent, Stack, Typography } from '@mui/material';

import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import TaskTitleField from './elements/taskTitleField';
import TaskDescriptionField from './elements/taskDescriptionField';
import TaskDateField from './elements/taskDateField';
import TaskSelectField from './elements/taskSelectField';

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
    const [taskTitle, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [date, setDate] = React.useState(new Date());
    const [status, setStatus] = React.useState(statusOptions[0].value)
    const [priority, setPriority] = React.useState(priorities[0].value)

    return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
                px={4}
                my={6}
            >
                <Typography mb={2} component="h2" variant="h6">
                    Create A Task
                </Typography>

                <Stack sx={{ width: '100%' }} spacing={1}>
                    <TaskTitleField
                        onChange={(e)=> {setTitle(e.target.value)}}
                    />
                    <TaskDescriptionField 
                        onChange={(e)=> {setDescription(e.target.value)}}
                    />
                    <TaskDateField
                        value={date}
                    />
                    <Stack direction="row" sx={{ width: '100%' }} spacing={1}>
                        <TaskSelectField 
                            label="Status" 
                            value={status} 
                            options={statusOptions}
                            onChange={(e) => setStatus(e.target.value as Status)}
                        />
                        <TaskSelectField 
                            label="Priority" 
                            value={priority}
                            options={priorities}
                            onChange={(e) => setPriority(e.target.value as Priority)}
                        />
                    </Stack>
                </Stack>
            </Box>
    )
};


export default CreateTask;