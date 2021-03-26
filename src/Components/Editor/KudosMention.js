
import React,{useState,useMemo,useRef,useCallback} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Editor from "@draft-js-plugins/editor"
import createMentionPlugin,{defaultSuggestionsFilter} from '@draft-js-plugins/mention'

import editorStyles from './EditorStyles.module.css';
import users from '../../Data/users.json'

const StyledTextInput = styled.div`
    width:100%;
    border:1px solid ${props=>props.theme.colors.border.secondary};
    border-radius:${props=>props.theme.borderRadius};
    cursor: text;
    background:${props=>props.theme.colors.background.secondary};
    position:relative;
    padding:6px;
    min-height: 30px;

`

//draft.js editor to write person's name whom kudos is destined to
const KudosMention = ({setEditorState,editorState,onMentionChange})=>{
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const [suggestions,setSuggestions]=useState(users)

    const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
        theme: editorStyles,
        supportWhitespace: true,
        mentionPrefix: '@',});
    const { MentionSuggestions } = mentionPlugin;
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
    }, []);

    const handleOpenChange = useCallback(open=>{
        setOpen(open)
    },[])
    const handleSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, suggestions));
      }, [])
    
      return (
        <StyledTextInput  onClick={()=>{ref.current.focus()}} >
            <Editor  editorState={editorState} onChange={setEditorState} plugins={plugins} ref={ref}/>
            <MentionSuggestions onSearchChange={handleSearchChange} suggestions={suggestions} open={open}
            onOpenChange={handleOpenChange}  onAddMention={onMentionChange}/>
        </StyledTextInput>
      )
}

KudosMention.propTypes = {
    onMentionChange:PropTypes.func,
    setEditorState:PropTypes.func,
    editorState:PropTypes.object,
}

export default KudosMention;