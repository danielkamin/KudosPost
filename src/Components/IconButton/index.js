
import React from 'react'
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';

const StyledIconButton = styled.button`
border:none;
padding:5px;
background: ${props=>props.theme.colors.details.primary};
border-radius: ${props=>props.theme.borderRadius};
line-height:1em;
transition: opacity 0.3s;
cursor: pointer;
&:hover{
    opacity:0.5;
}
${({secondary})=>
secondary? css`
    background: ${props=>props.theme.colors.border.primary};
`:css`
    background: ${props=>props.theme.colors.details.primary};
`}
`

const IconButton = ({secondary,children,disabled})=>{
    return (
        <div>
            <StyledIconButton secondary={secondary} disabled={disabled}>
                {children}
            </StyledIconButton>
        </div>
    )
}

export default IconButton;

IconButton.propTypes = {
    children:PropTypes.element,
    disabled:PropTypes.bool,
    secondary:PropTypes.bool
}