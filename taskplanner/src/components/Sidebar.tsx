import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import { sideBarStyle } from  '../styles/Sidebar';

import Profile from './Profile';

const Sidebar:FC = ():ReactElement  => {
    return (
        <Grid item md={4} sx={sideBarStyle}>
            <Profile/>
            <h2>Sidebar Area</h2>
        </Grid>
    )
}

export default Sidebar