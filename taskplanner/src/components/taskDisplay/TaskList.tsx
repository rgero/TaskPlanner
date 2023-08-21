import React, {FC, ReactElement} from 'react';

import { Grid, Box } from '@mui/material';

const TaskList:FC = ():ReactElement  => {
    return (
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <Box>Tasks Will Come Over Here</Box>
          <Box>Tasks Will Come Over Here</Box>
        </Grid>
    )
}

export default TaskList