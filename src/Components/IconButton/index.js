import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIconButton = styled.button`
border:none;
width:${props=>props.theme.fontSize.lg};
height:${props=>props.theme.fontSize.lg};
background: ${props=>props.theme.colors.details.primary};
`

const IconButton = ({children,disabled})=>{
    return (
        <div><StyledIconButton disabled={disabled}>{children}</StyledIconButton></div>
        
    )
}

export default IconButton;

IconButton.propTypes = {
    children:PropTypes.element,
    disabled:PropTypes.bool
}