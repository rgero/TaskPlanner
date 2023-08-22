import { Box, Button, FormControlLabel, Switch} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types'

import { ITaskFooter } from './interfaces/ITaskFooter';
  
const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {

    const {
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
                        onChange={onStatusChange}
                    />
                }
            />
            <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ color: '#ffffff' }}
                onClick={onClick}
            >
                Mark Complete
            </Button>
        </Box>
    );
};

TaskFooter.propTypes = {
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func
}

export default TaskFooter;