import React from 'react'
import PropTypes from 'prop-types';
import createMentionPlugin from '@draft-js-plugins/mention'
import {EditorState,convertFromRaw} from "draft-js";
import Editor from "@draft-js-plugins/editor"
import editorStyles from './EditorStyles.module.css';


const PostDisplay = ({postContent})=>{
    const mentionPlugin = createMentionPlugin({
        theme: editorStyles,
        supportWhitespace: true,
        mentionPrefix: '@',});
    const plugins = [mentionPlugin];
    const content = convertFromRaw(postContent);  
    const editorState = EditorState.createWithContent(content)
    return  <Editor editorState={editorState} readOnly={true} plugins={plugins}/>
}
PostDisplay.propTypes = {
    postContent:PropTypes.object.isRequired
}
export default PostDisplay