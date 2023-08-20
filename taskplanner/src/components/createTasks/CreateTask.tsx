import React, {FC, ReactElement} from 'react';
import { Box, SelectChangeEvent, Stack, Typography } from '@mui/material';
import TaskTitleField from './taskTitleField';
import TaskDescriptionField from './taskDescriptionField';
import TaskDateField from './taskDateField';
import TaskSelectField from './taskSelectField';

const statusOptions = [
    {
        value: "todo",
        label: "To Do"
    },
    {
        value: "inprogress",
        label: "In Progress"
    },
    {
        value: "done",
        label: "Done"
    },
]

const priorities = [
    {
        value: "low",
        label: "Low"
    },
    {
        value: "med",
        label: "Medium"
    },
    {
        value: "high",
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
                            onChange={(e)=>setStatus(e.target.value)}
                        />
                        <TaskSelectField 
                            label="Priority" 
                            value={priority}
                            options={priorities}
                            onChange={(e)=>setPriority(e.target.value)}
                        />
                    </Stack>
                </Stack>
            </Box>
    )
};


export default CreateTask;