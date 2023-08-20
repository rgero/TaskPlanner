import { SelectChangeEvent } from "@mui/material";
import { IDisabled } from "./IDisabled";
import React from "react";

export interface ISelectOption {
    value: string,
    label: string
}

export interface ISelectField extends IDisabled 
{
    title?: string,
    label?: string,
    value?: string,
    onChange?: ( e:SelectChangeEvent ) => void;
    options?: ISelectOption[]
}