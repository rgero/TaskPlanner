import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TaskArea from '../components/TaskArea';

const Dashboard:FC = ():ReactElement  => {
    localStorage.setItem("userData", JSON.stringify({
        "token": ""
    }))

    return (
        <Grid container minHeight="100vh" p={0} m={0}>
            <TaskArea/>
            <Sidebar/>
        </Grid>
    )
};

export default Dashboard;