import React, {FC, ReactElement} from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, Typography, } from '@mui/material';
import { avatarStyle, profileStyle } from '../styles/Sidebar';

import IProfile from '../interfaces/IProfile';

const Profile:FC<IProfile> = (props):ReactElement  => {
    const {name = "Unknown" } = props;

    return (
        <Box sx={profileStyle}>
            <Avatar sx={avatarStyle}>
                <Typography variant="h4" color="white">
                    {`${name.substring(0,1)}`}
                </Typography>
            </Avatar>
            <Typography variant="h4" color="text.primary" sx={{pt:3}}>
                Welcome, {name}!
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
                This is your personal tasks manager
            </Typography>
        </Box>
    )
};

Profile.propTypes = {
    name: PropTypes.string
}

export default Profile;