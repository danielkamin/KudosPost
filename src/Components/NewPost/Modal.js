import React from 'react';
import PropTypes from 'prop-types';
import styled,{css} from 'styled-components';
import close from '../../assets/images/close.svg'
import IconButton from '../Buttons/IconButton'

const StyledModal = styled.div`
position:absolute;
top:10%;
z-index:100;
border:1px solid ${props=>props.theme.colors.border.secondary};
border-radius:${props=>props.theme.borderRadius};
background:${props=>props.theme.colors.background.secondary};
width:560px;
padding:20px 40px;
${({open})=>
open ? css`
display:block;
`:css`display:none;`}
`
const StyledModalHeader = styled.div`
display:flex;
align-items: center;
& > div {
    margin-left:auto;
}
& > p{
    margin:0 10px;
    font-weight:bold;
    text-transform:uppercase;
}
`
const CustomModal = ({children,text,icon,open,closeModal})=>{
    console.log(children)
    return <StyledModal open={open}>
        <StyledModalHeader>
            <img src={icon}/>
            <p>{text}</p>
            <IconButton secondary onClick={closeModal}>
                <img src={close}/>
            </IconButton>
        </StyledModalHeader>
        {children}
    </StyledModal>
}
export default CustomModal;
CustomModal.propTypes={
    children:PropTypes.element,
    text:PropTypes.string,
    icon:PropTypes.string,
    open:PropTypes.bool,
    closeModal:PropTypes.func
}