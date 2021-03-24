import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import close from '../../assets/images/close.svg'
import IconButton from '../IconButton/index'

const StyledModal = styled.div`
border:1px solid ${props=>props.theme.colors.border.secondary};
border-radius:${props=>props.theme.borderRadius};
background:${props=>props.theme.colors.background.secondary};
width:560px;
padding:20px 40px;
`
const StyledModalHeader = styled.div`
display:flex;
margin-bottom:40px;
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
const CustomModal = ({children,text,icon})=>{
    const closeModal = (e)=>{
        e.preventDefault();
    }
    console.log(children)
    return <StyledModal>
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
    icon:PropTypes.string
}