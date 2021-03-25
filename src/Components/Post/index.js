/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import PostDisplay from '../Editor/PostDisplay'
import styled from 'styled-components';
import Kudos from '../Kudos/index'

const StyledPost = styled.div`
display:flex;
flex-direction:column;
background-color:${props=>props.theme.colors.background.secondary};
border-color:${props=>props.theme.colors.border.primary};
& .mention {
    color: rgb(168, 153, 111);
    text-decoration: none;
  }
`
const DisplayPost = ({post})=>{
   
    return <StyledPost>
        <PostDisplay postContent={post.postContent}/>
       
        {/* <Kudos/> */}
    </StyledPost>
}

export default DisplayPost

DisplayPost.propTypes={
    post:PropTypes.object.isRequired
}