/* eslint-disable react/prop-types */
import React,{useState,useRef,useMemo,useCallback} from 'react'

//draft.js imports
import {EditorState} from "draft-js";
import Editor from "@draft-js-plugins/editor"
import createMentionPlugin,{defaultSuggestionsFilter} from '@draft-js-plugins/mention'
import createEmojiPlugin from '@draft-js-plugins/emoji';

//styles import
import editorStyles from './EditorStyles.module.css';
import styled from 'styled-components';

//data import
import users from '../../Data/users.json'

//additional components import
import IconButton from '../IconButton/index'
import Attach from '../../assets/images/attach.svg'
import Gif from '../../assets/images/gif.svg'

const StyledTextInput = styled.div`
width:500px;
border:1px solid ${props=>props.theme.colors.border.secondary};
border-radius:${props=>props.theme.borderRadius};
cursor: text;
background:${props=>props.theme.colors.background.secondary};
position:relative;
padding:${props=>props.theme.fontSize.sm};
`

const TextInput = ({className,onMentionChange})=>{
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const [suggestions,setSuggestions]=useState(users)
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );   
    const { MentionSuggestions, plugins,EmojiSuggestions, EmojiSelect } = useMemo(() => {
    const emojiPlugin = createEmojiPlugin({useNativeArt: true,});
    const mentionPlugin = createMentionPlugin({
        theme: editorStyles,
        supportWhitespace: true,
        mentionPrefix: '@',});
    const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin,emojiPlugin];
    return { plugins, MentionSuggestions,EmojiSuggestions,EmojiSelect };
    }, []);

    const handleOpenChange = useCallback(open=>{
        setOpen(open)
    },[])
    const handleSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, suggestions));
      }, [])
    
    return (
        <StyledTextInput className={className}onClick={()=>{ref.current.focus()}} >
                <Editor editorState={editorState} onChange={setEditorState} plugins={plugins} ref={ref}/>
                <EmojiSuggestions />
                <MentionSuggestions onSearchChange={handleSearchChange} suggestions={suggestions} open={open}
                onOpenChange={handleOpenChange}  onAddMention={onMentionChange}/>
            <div className={editorStyles.options}>
                <EmojiSelect className={editorStyles.emojiSelect}/>
                <IconButton disabled={true}><img src={Attach}/></IconButton>
                <IconButton disabled={true}><img src={Gif}/></IconButton>
            </div>
        </StyledTextInput>
    )
}

export default TextInput;