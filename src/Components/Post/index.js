import React from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Kudos from '../Kudos/index'

const StyledPost = styled.div`
display:flex;
flex-direction:column;
background-color:${props=>props.theme.colors.background.secondary};
border-color:${props=>props.theme.colors.border.primary};
`
const DisplayPost = ({post})=>{
    return <StyledPost>
        {post.postContent}
        <Kudos/>
    </StyledPost>
}

export default DisplayPost

DisplayPost.propTypes={
    post:PropTypes.object.isRequired
}