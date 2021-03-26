/* eslint-disable no-unused-vars */
import React,{useMemo,useState} from 'react'
import PropTypes from 'prop-types';

//draf.js imports
import createMentionPlugin from '@draft-js-plugins/mention'
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import {EditorState,convertFromRaw} from "draft-js";
import Editor from "@draft-js-plugins/editor"
import editorStyles from './EditorStyles.module.css';



//disabled (READ-ONLY) draft.js editor for displaying saved content without changing anything
const PostDisplay = ({postContent})=>{
    const content = convertFromRaw(postContent);  
    const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(content)
    );
    const {plugins} = useMemo(()=>{
        const mentionPlugin = createMentionPlugin({
            theme: editorStyles,
            supportWhitespace: true,
            mentionPrefix: '@',});
        const hashtagPlugin = createHashtagPlugin();
        const plugins = [mentionPlugin,hashtagPlugin];
        return {plugins}
    },[])
    
    
    return  <div>
            <Editor editorState={editorState} readOnly={true} plugins={plugins} onChange={setEditorState}/>
        </div>
}
PostDisplay.propTypes = {
    postContent:PropTypes.object.isRequired
}
export default PostDisplay