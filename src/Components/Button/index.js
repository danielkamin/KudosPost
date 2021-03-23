import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
const StyledButton = styled.button`
padding:5px 10px;
background-color:${props=>props.theme.colors.details.secondary};
color: white;
cursor:pointer;
border-radius:${props=>props.theme.borderRadius};
border:none;
`

const Button = ({children})=>{

    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;

Button.propTypes = {
    children:PropTypes.string
}
