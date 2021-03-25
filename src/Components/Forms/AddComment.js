import React,{useState} from 'react'
import {EditorState} from "draft-js";
import PostContent from '../Editor/PostContent'

import styled from 'styled-components';

const StyledPostCommentSection = styled.div`
    padding:10px;
`

const AddComment = ()=>{
    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
    );
    return (
        <StyledPostCommentSection>
            <PostContent editorState={editorState} setEditorState={setEditorState}/>
        </StyledPostCommentSection>
    )

}

export default AddComment