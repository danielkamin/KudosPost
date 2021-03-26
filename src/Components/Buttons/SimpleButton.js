import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
const StyledButton = styled.button`
    height:32px;
    width:120px;
    background-color:${props=>props.theme.colors.details.secondary};
    color: white;
    cursor:pointer;
    border-radius:${props=>props.theme.borderRadius};
    border:none;
    transition:opacity 0.3s;
    &:hover{
        opacity:0.5;
    }
`

//simple styled button component with two color options: primary and secondary (color pallete in theme.js file)
const SimpleButton = ({children,type,secondary,onClick})=>{
    return (
        <StyledButton type={type} secondary={secondary} onClick={onClick}>
            {children}
        </StyledButton>
    )
}
SimpleButton.propTypes = {
    children:PropTypes.string,
    type:PropTypes.string,
    secondary:PropTypes.bool,
    onClick:PropTypes.func
}
export default SimpleButton;


