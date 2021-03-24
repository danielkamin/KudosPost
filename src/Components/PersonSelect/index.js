import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';


//
import close from '../../assets/images/close.svg'
const StyledDiv = styled.div`
border:1px solid ${props=>props.theme.colors.border.secondary};
border-radius:${props=>props.theme.borderRadius};
background:${props=>props.theme.colors.background.secondary};
height:35px;
display:flex;
align-items:center;
padding:10px;
`
const SelectedPerson = styled.div`
border:1px solid ${props=>props.theme.colors.details.primary};
width:fit-content;
display:flex;
padding:2px 4px;
border-radius:${props=>props.theme.borderRadius};
background:${props=>props.theme.colors.border.primary};
& img{
    width:7px;
    height:7px;
    margin-left:15px;
}
`
const PersonSelect = ({person,deleteKudos})=>{
    if(person==='') return <StyledDiv></StyledDiv>
    else return <StyledDiv>
        <SelectedPerson>
            <div>{person}</div>
            <img src={close} onClick={deleteKudos}/> 
        </SelectedPerson>
    </StyledDiv>
}
PersonSelect.propTypes = {
    person:PropTypes.string,
    deleteKudos:PropTypes.func
}
export default PersonSelect