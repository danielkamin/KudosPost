/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import format from 'date-fns/format'
import styled from 'styled-components';

//additional components
import Avatar from '../../assets/images/profilowe.jpg'
import PostDisplay from '../Editor/PostDisplay'
import AddComent from '../Forms/AddComment'
import IconButton from '../Buttons/IconButton'
import Agreement from '../../assets/images/agreementLight.svg'

//data import
import kudosTypes from '../../Data/kudosTypes'
import groups from '../../Data/groups.json'


const StyledPost = styled.div`
display:flex;
margin-bottom:15px;
flex-direction:column;
border-radius:${props=>props.theme.borderRadius};
background-color:${props=>props.theme.colors.background.secondary};
border: 1px solid ${props=>props.theme.colors.border.primary};
& svg{
    & *{
        color:black;
    }
}
`
const StyledPostContent = styled.div`
padding:10px;
    border-bottom: 1px solid ${props=>props.theme.colors.border.primary};
    
`
const StyledPostHeader = styled.div`
& > img{
    width:40px;
    height:auto;
    border-radius: 50%;
}
`
const DisplayPost = ({post})=>{
    const kudosType = kudosTypes.find(({id})=>id===post.kudosType)
    const group = groups.find(({id})=>id===post.postGroup)
    console.log(post)
    return <StyledPost>
        <StyledPostContent><PostDisplay postContent={post.postContent}/>
        <StyledPostHeader><img src={Avatar}/>
        <p>{post.postAuthor}</p>
        {format(new Date(post.postDate), 'MM/dd/yyyy')}</StyledPostHeader>
        <Agreement/>
        <div>
        <img src={kudosType.imageUrl.default}/><p>{post.kudosPerson}</p> </div>
        <div>
            <div>{group.content}</div>
            <IconButton secondary>like</IconButton>
            <IconButton>comment</IconButton>
            <IconButton>more</IconButton>
        </div>
        
        </StyledPostContent>

        <AddComent/>
    </StyledPost>
}

export default DisplayPost

DisplayPost.propTypes={
    post:PropTypes.object.isRequired
}