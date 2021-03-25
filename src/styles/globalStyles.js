import styled, {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif;
}
`;

export const Main = styled.main`
min-height:100vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background-color:${props=>props.theme.colors.background.primary};
font-size:${props=>props.theme.fontSize.md};`

export default GlobalStyle;