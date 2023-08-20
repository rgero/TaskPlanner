import React, {FC, ReactElement} from 'react';
import {ThemeProvider, CssBaseline} from "@mui/material"
import { customTheme } from './theme/customTheme';

// My components
import Dashboard from './pages/Dashboard';


//Note: FC is Functional Component
//      ReactElement is the JSX that's constucted for rendering.
const App:FC = ():ReactElement  => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
