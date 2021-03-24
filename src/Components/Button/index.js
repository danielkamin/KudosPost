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
`

const CustomButton = ({children,type})=>{

    return (
        <StyledButton type={type}>
            {children}
        </StyledButton>
    )
}
CustomButton.propTypes = {
    children:PropTypes.string,
    type:PropTypes.string
}
export default CustomButton;


