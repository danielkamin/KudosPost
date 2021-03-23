import React,{Fragment} from 'react';

//style imports
import theme from './styles/theme'
import './styles/App.css'
import GlobalStyle from './styles/globalStyles';

// context/provider imports
import { ThemeProvider } from 'styled-components';
import {AppProvider} from './Context/AppContext';

//pages imports
import Home from './Pages/Home'


const App = ()=>{

    return (
        
            <ThemeProvider theme={theme}>       
                <Fragment>
                    <GlobalStyle/>
                    <AppProvider>
                        <Home/>
                    </AppProvider> 
                </Fragment>
            </ThemeProvider>
    )
}
export default App;