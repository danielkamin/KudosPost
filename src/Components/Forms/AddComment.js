import React,{useState} from 'react'
import {EditorState} from "draft-js";
import PostContent from '../Editor/PostContent'

import styled from 'styled-components';
import Avatar from '../ImageComponents/Avatar';
import avatar from '../../assets/images/avatar.jpg'

const StyledPostCommentSection = styled.div`
    padding:20px 16px;
    display:flex;
    align-items:center;
    & > div:nth-of-type(2){
        
    }
    & > div:nth-of-type(1){
        margin-left:4px;
        margin-right:12px;
    }
`

//sample form for adding comments to post
const AddComment = ()=>{
    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
    );
    return (
        <StyledPostCommentSection>
            <Avatar imageSrc={avatar}/>
            <PostContent secondary={true} editorState={editorState} setEditorState={setEditorState} placeHolder='Napisz komentarz...'/>
        </StyledPostCommentSection>
    )

}

export default AddComment