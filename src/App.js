
import React,{Fragment} from 'react';
import Home from './Pages'
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
const App = ()=>{
    return (
        <ThemeProvider theme={theme}>       
            <Fragment>
                <GlobalStyle/>
                <Home/>
            </Fragment>
        </ThemeProvider>
    )
}
export default App;