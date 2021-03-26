/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import pl from 'date-fns/locale/pl'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import styled, { css } from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

//additional components
import avatar from '../../assets/images/profilowe.jpg'
import PostDisplay from '../Editor/PostDisplay'
import AddComent from '../Forms/AddComment'
import IconButton from '../Buttons/IconButton'
import KudosIcon from '../ImageComponents/KudosIcon'
import Avatar from '../ImageComponents/Avatar'
import Kudos from '../Kudos/Kudos'

//images
import more from '../../assets/images/more.png'

//data import
import kudosTypes from '../../Data/kudosTypes'
import groups from '../../Data/groups.json'


const StyledPost = styled.div`
display:flex;
flex-direction:column;
border-radius:${props=>props.theme.borderRadius};
background-color:${props=>props.theme.colors.background.secondary};
border: 1px solid ${props=>props.theme.colors.border.primary};
margin-bottom:13px;
`
const StyledPostContent = styled.div`
padding:16px;
    border-bottom: 1px solid ${props=>props.theme.colors.border.primary};
`
const StyledPostHeader = styled.div`
    display:flex;
    align-items:end; 
    & div:last-of-type{
        margin-left:auto;
    }
`
const StyledPostInfo = styled.div`
    margin-left:8px;
    & p:first-of-type{
        font-weight:bold;
    }
    & p:last-of-type{
        color:${props=>props.theme.colors.text.secondary}
    }
`
const StyledPostFooter = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
& > div:first-of-type{
    margin-right:auto;
}
& img{
    height:12px;
}
`
const StyledInteractSection= styled.div`
    display:flex;
    align-items:center;
    margin-right:20px;
    color:${props=>props.theme.colors.details.primary};
    & div{
        margin: 0 5px;
    }
    & span{
        margin-right: 10px;
    }
    & button{
        outline:none;
    }
`

const StyledMoreSection = styled.div`
    position:relative;
    & div:last-of-type{
        padding: 5px;
        display:none;
        flex-direction:column;
        position:absolute;
        z-index:2;
        border:1px solid ${props=>props.theme.colors.details.primary};
        border-radius:${props=>props.theme.borderRadius};
        background-color:${props=>props.theme.colors.border.primary};
        ${({open})=>open ===true && css` display:flex;`}
        & a{
            text-decoration:none;
            color:${props=>props.theme.colors.text.primary};
            transition:opacity 0.3s;
        }
        & a:hover{
            opacity:0.5;
        }
    }
`
const StyledMainSection = styled.div`
margin-top:40px;
margin-bottom:20px;
`
const StyledGroup = styled.div`
color:${props=>props.theme.colors.details.primary};
i{
    border-radius:${props=>props.theme.borderRadius};
    background-color:${props=>props.theme.colors.border.secondary};
    padding:5px;
    margin-right:10px;
    color:${props=>props.theme.colors.details.primary};
  }
`

//component for displaying Kudos Post made by somebody. 
/**
 * 
 * @param {Object} post - Class Post object stored in context
 * @returns Kudos Post component
 */
const DisplayPost = ({post})=>{
    const date = formatDistanceStrict(new Date(post.postDate),new Date(),{ addSuffix: true, locale:pl})
    const [likesCount,setLikesCount] = useState(()=>{
        return post.likesCount})
    const [commentsCount,setCommentsCount] = useState(()=>{
        return post.commentsCount})
    const [openMoreMenu,setOpenMoreMenu] = useState(false);
    const kudosType = kudosTypes.find(({id})=>id===post.kudosType)
    const group = groups.find(({id})=>id===post.postGroup)
    return <StyledPost>
        <StyledPostContent>
            <StyledPostHeader>
                <Avatar imageSrc={avatar} large={true}/>
                <StyledPostInfo>
                    <p>{post.postAuthor}</p>
                    <p>{date}</p>
                </StyledPostInfo>
                <KudosIcon light={true} background={true}/>
            </StyledPostHeader>
            <StyledMainSection>
                <PostDisplay postContent={post.postContent}/>
            </StyledMainSection>
            <div>
                <Kudos large={true} imageUrl={kudosType.imageUrl} name={post.kudosPerson} text={kudosType.text}/>
            </div>
            <StyledPostFooter>
                <StyledGroup>
                    <i className={`fas ${group.icon}`}></i>
                    {group.content}
                </StyledGroup>
                <StyledInteractSection>
                    <IconButton onClick={()=>setLikesCount((likes)=>{return likes+1})}>
                        <FontAwesomeIcon icon={["fas","heart"]} color="#EEEEEE"/>
                    </IconButton>
                    <span>{likesCount}</span>
                    <IconButton onClick={()=>setCommentsCount((comments)=>{return comments+1})}>
                        <FontAwesomeIcon icon={["fas","comment-alt"]} color="#EEEEEE"/>
                    </IconButton>
                    <span>{commentsCount}</span>
                </StyledInteractSection>
                <StyledMoreSection open={openMoreMenu}>
                    <IconButton onClick={()=>setOpenMoreMenu(!openMoreMenu)}>
                        <img src={more}/>
                    </IconButton>
                    <div>
                        <a href='#'>Edycja</a>
                        <a href='#'>Udostępnij</a>
                        <a href='#'>Inne</a>
                    </div>
                </StyledMoreSection>
            </StyledPostFooter>
        </StyledPostContent>
        <AddComent/>
    </StyledPost>
}

export default DisplayPost

DisplayPost.propTypes={
    post:PropTypes.object.isRequired
}