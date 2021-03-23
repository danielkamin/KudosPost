import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import close from '../../assets/images/close.svg'
const StyledModal = styled.div`
border:1px solid ${props=>props.theme.colors.border.secondary};
border-radius:${props=>props.theme.borderRadius};
background:${props=>props.theme.colors.background.secondary};
width:560px;
padding:40px;
`

const CustomModal = ({icon,children,text,onClose})=>{
    return <StyledModal>
        <div><p>{text}</p><button onClick={onClose}><img src={close}/></button></div>
        
        
        {children}
    </StyledModal>
}
export default CustomModal;
CustomModal.propTypes={
    children:PropTypes.element
}