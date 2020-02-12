import React from 'react';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: {
      main: '#47d7ac'
    },
  },
});
function App() {    
  return (
    <div className="App">
      <BrowserRouter>        
        <CssBaseline/>
        <ThemeProvider theme={theme}>                    
        <Routes/>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
