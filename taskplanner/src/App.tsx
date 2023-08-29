import React, {FC, ReactElement} from 'react';
import {ThemeProvider, CssBaseline} from "@mui/material"
import { customTheme } from './theme/customTheme';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

// My components
import Dashboard from './pages/Dashboard';

// Create a client for React Query
const queryClient = new QueryClient();

//Note: FC is Functional Component
//      ReactElement is the JSX that's constucted for rendering.
const App:FC = ():ReactElement  => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline/>
        <Dashboard/>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
