import React, {useState} from 'react'
import './App.css'
import {Box, Button, Grid, ThemeProvider} from "@mui/material";
import {Dot, DotStateEnum} from "./components/dot/dot.component";
import {Column} from "./components/column/column.component";

const columns = 7
const rows = 6
type GameState = DotStateEnum[][]



const App = () => {
    const [state] = useState(new Array(columns).fill(new Array(rows).fill(DotStateEnum.Blank)))


  return (<ThemeProvider theme={{}} >
          <Box p={1}>
              <Grid container spacing={2}>
                  {state.map((column) => <Grid item><Column items={column} /></Grid>)}
              </Grid>
          </Box>
      </ThemeProvider>

  )
}

export default App
