import React, {useState} from 'react'
import {Dot, DotStateEnum} from "../dot/dot.component";
import {Grid} from "@mui/material";

interface IColumnProps {
    items: DotStateEnum[]
}

export const Column: React.FC<IColumnProps> = ({ items }) => {
    return (<Grid container direction="column" spacing={1}>
        {items.map((state) => <Grid item><Dot state={state} /></Grid>)}
    </Grid>)
}
