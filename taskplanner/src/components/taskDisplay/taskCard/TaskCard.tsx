import React, {FC, ReactElement} from 'react';
import { Box } from '@mui/material';

import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';

const TaskCard:FC = ():ReactElement  => {

    const taskStyling = {
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light'
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
            <TaskHeader/>
            <TaskDescription/>
            <TaskFooter/>
        </Box>


    )
}

export default TaskCard