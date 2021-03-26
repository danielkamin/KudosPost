import React,{Fragment} from 'react';

//style imports
import theme from './styles/theme'
import './styles/App.css'
import GlobalStyle from './styles/globalStyles';

//fontawesome icons
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
// context/provider imports
import { ThemeProvider } from 'styled-components';
import {AppProvider} from './Context/AppContext';

//pages imports
import Home from './Pages/Home'

library.add(fas)
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