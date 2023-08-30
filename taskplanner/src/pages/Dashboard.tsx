import React, {FC, ReactElement} from 'react';

import { Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TaskArea from '../components/TaskArea';

const Dashboard:FC = ():ReactElement  => {
    localStorage.setItem("userData", JSON.stringify({
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxOTg5MTc1MC0wYmE4LTRlZmMtODdjNS1jOWUzMjAyMzBkZjgiLCJpYXQiOjE2OTM0MzcwNjd9.S6LJXrKz2J2zXapA87QufzjRe00khtxFqdNA-I9QIM4"
    }))

    return (
        <Grid container minHeight="100vh" p={0} m={0}>
            <TaskArea/>
            <Sidebar/>
        </Grid>
    )
};

export default Dashboard;