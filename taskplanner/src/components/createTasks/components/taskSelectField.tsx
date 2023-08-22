


import React, {FC, ReactElement} from 'react';
import PropTypes from 'prop-types';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ISelectField } from '../intefaces/ISelectField';

const TaskSelectField:FC<ISelectField> = (props) :ReactElement  => {
    const {
        label = "No Label",
        value = "",
        onChange = (e: SelectChangeEvent) => console.log(e),
        options = [],
        disabled = false
    } = props;
    const title:string = label.toLowerCase();
    
    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`${title}-id`}>{label}</InputLabel>
            <Select
                labelId={`${title}-id`}
                id={`${title}-id-select`}
                value={value}
                label={label}
                name={title}
                onChange={onChange}
                disabled={disabled}
            >
                {options.map((item, index) => (
                    <MenuItem
                        key={item.value + index}
                        value={item.value}
                        >
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

TaskSelectField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    options: PropTypes.array
}

export default TaskSelectField