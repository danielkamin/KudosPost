import React from 'react'
import PropTypes from 'prop-types'

//styles import
import styled from 'styled-components';

//img imports
import KudosIcon from '../ImageComponents/KudosIcon'
import avatar from '../../assets/images/avatar.jpg'
import Avatar from '../ImageComponents/Avatar'


const StyledDiv = styled.div`
    cursor:pointer;
    width:100%;
    padding:8px 16px;
    background-color:${props=>props.theme.colors.background.secondary};
    border:1px solid${props=>props.theme.colors.border.primary};
    display:flex;
    margin-bottom:13px;
    align-items:center;
    border-radius:${props=>props.theme.borderRadius};
    color:${props=>props.theme.colors.text.secondary};
    & p{
        color:${props=>props.theme.colors.text.secondary};
        margin-left:8px;
    }
    & div:last-of-type{
        margin-left:auto;
    }
`

//custom button component that displays new post modal
const NewPostButton = ({onClick}) =>{
    return <StyledDiv onClick={onClick}>
        <Avatar imageSrc={avatar} large={true}/>
    <div><p>Kliknij, aby dodać post</p> </div>
    <KudosIcon light={true}/>
    </StyledDiv>

}

NewPostButton.propTypes = {
    onClick:PropTypes.func
}

export default NewPostButton