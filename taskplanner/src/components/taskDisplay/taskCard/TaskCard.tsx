import React, {FC, ReactElement} from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskCard } from './interfaces/ITaskCard';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import { Priority } from '../../createTasks/enums/Priority';
import { Status } from '../../createTasks/enums/Status';
import { RenderPriorityBorderColor } from './helpers/RenderPriorityColor';


const TaskCard:FC<ITaskCard> = (props):ReactElement  => {

    const {
        title = "Test Title",
        date = new Date(),
        description = "This is the testing description, remove in future",
        priority = Priority.normal,
        status = Status.todo,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e),
        id
    } = props;

    const taskStyling = {
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: `${RenderPriorityBorderColor(priority)}`
    }

    return (
        <Box
            display="flex"
            width="100%"
            justifyContent="flex-start"
            flexDirection="column"
            mb={4}
            p={4}
            sx={taskStyling}
        >
            <TaskHeader title={title} date={date} />
            <TaskDescription description={description}/>
            <TaskFooter id={id} status={status} onStatusChange={onStatusChange} onClick={onClick}/>
        </Box>


    )
}

TaskCard.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func,
    priority: PropTypes.string,
    status: PropTypes.string
}

export default TaskCard