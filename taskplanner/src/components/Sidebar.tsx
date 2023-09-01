import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import { sideBarStyle } from  '../styles/Sidebar';

import Profile from './Profile';
import CreateTask from './createTasks/CreateTask';
import { GetDisplayName } from './helpers/ParseUserData';

const Sidebar:FC = ():ReactElement  => {
    return (
        <Grid item md={4} sx={sideBarStyle}>
            <Profile displayName={GetDisplayName()}/>
            <CreateTask/>
        </Grid>
    )
}

export default Sidebar