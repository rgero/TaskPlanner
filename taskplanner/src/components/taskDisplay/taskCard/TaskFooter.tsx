import { Box, Button, FormControlLabel, Switch} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types'

import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../../createTasks/enums/Status';
  
const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {

    const {
        id,
        status,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e)
    } = props;

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
        >
            <FormControlLabel
                label="In Progress"
                control={
                    <Switch
                        color="warning"
                        onChange={(e)=> onStatusChange(e, id)}
                        defaultChecked={status === Status.inProgress}
                    />
                }
            />
            <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ color: '#ffffff' }}
                onClick={(e)=>onClick(e, id)}
            >
                Mark Complete
            </Button>
        </Box>
    );
};

TaskFooter.propTypes = {
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    status: PropTypes.string
}

export default TaskFooter;