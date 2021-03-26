
import React from 'react'
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';

const StyledIconButton = styled.button`
    border:none;
    border-radius: ${props=>props.theme.borderRadius};
    line-height:1em;
    transition: opacity 0.3s;
    cursor: pointer;
    &:hover{
        opacity:0.5;
}
${({background})=>
background? css`
    padding:5px;
    background: ${props=>props.theme.colors.border.primary};
    ${({secondary})=>
    secondary? css`
        background: ${props=>props.theme.colors.border.primary};
    `:css`
        background: ${props=>props.theme.colors.details.primary};
    `}
`:css`
    background: none;
`}

}
`
//Custom icon button with posibility to bind onClick functions
const IconButton = ({background,secondary,children,disabled,onClick})=>{
    return (
        <div>
            <StyledIconButton background={background} secondary={secondary} disabled={disabled} onClick={onClick}>
                {children}
            </StyledIconButton>
        </div>
    )
}

export default IconButton;

IconButton.propTypes = {
    children:PropTypes.element,
    disabled:PropTypes.bool,
    secondary:PropTypes.bool,
    onClick:PropTypes.func,
    background:PropTypes.bool
}