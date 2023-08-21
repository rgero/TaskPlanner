import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { IDateField } from '../intefaces/IDateField';


const TaskDateField:FC<IDateField> = (props): ReactElement => {
    const {
        value = new Date(),
        disabled = false,
        onChange = (date) => console.log(date)
    } = props;

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Task Date"
                    format="dd-MM-yyyy"
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                />
            </LocalizationProvider>
        </>
    );
};

TaskDateField.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.instanceOf(Date)
}

export default TaskDateField;