/* eslint-disable no-shadow */
import React,{useState,useRef,useMemo,useCallback} from 'react'
import PropTypes from 'prop-types'

//draft.js imports
import Editor from "@draft-js-plugins/editor"
import createMentionPlugin,{defaultSuggestionsFilter} from '@draft-js-plugins/mention'
import createEmojiPlugin from '@draft-js-plugins/emoji';
import createHashtagPlugin from '@draft-js-plugins/hashtag';


//styles import
import editorStyles from './EditorStyles.module.css';
import styled,{css} from 'styled-components';

//data import
import users from '../../Data/users.json'

//additional components import
import IconButton from '../Buttons/IconButton'
import Attach from '../../assets/images/attach.svg'
import Gif from '../../assets/images/gif.svg'

const StyledTextInput = styled.div`
width:100%;
border:1px solid ${props=>props.theme.colors.border.secondary};
border-radius:${props=>props.theme.borderRadius};
cursor: text;
background:${props=>props.theme.colors.background.secondary};
position:relative;

${({large})=>
large ? 
    css`min-height: 120px;
    padding:12px;` : 
    css`padding:6px;
    min-height: 30px;`}
`

//draft.js editor to write kudos post content and message
const PostContent = ({onMentionChange,large,editorState, setEditorState,maxCharacters,placeHolder,showWordCount,secondary})=>{
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const [suggestions,setSuggestions]=useState(users)
    const { MentionSuggestions, plugins,EmojiSuggestions, EmojiSelect } = useMemo(() => {
    const emojiPlugin = createEmojiPlugin({useNativeArt: true,});
    const hashtagPlugin = createHashtagPlugin();
    const mentionPlugin = createMentionPlugin({
        theme: editorStyles,
        supportWhitespace: true,
        mentionPrefix: '@',});
    const { EmojiSuggestions, EmojiSelect } = emojiPlugin;   
    const { MentionSuggestions } = mentionPlugin;
    const plugins = [mentionPlugin,emojiPlugin,hashtagPlugin];
    return { plugins, MentionSuggestions,EmojiSuggestions,EmojiSelect };
    }, []);

    const handleOpenChange = useCallback(open=>{
        setOpen(open)
    },[])
    const handleSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, suggestions));
      }, [])
    
    return (
        <StyledTextInput large={large} onClick={()=>{ref.current.focus()}} >
                <Editor placeholder={placeHolder} editorState={editorState} onChange={setEditorState} plugins={plugins} ref={ref}/>
                <EmojiSuggestions />
                <MentionSuggestions onSearchChange={handleSearchChange} suggestions={suggestions} open={open}
                onOpenChange={handleOpenChange}  onAddMention={onMentionChange}/>
            <div className={secondary?editorStyles.optionsSecondary :editorStyles.options}>
                <EmojiSelect className={editorStyles.emojiSelect}/>
                <IconButton disabled={true}><img src={Attach}/></IconButton>
                <IconButton disabled={true}><img src={Gif}/></IconButton>
            </div>
            {showWordCount && 
            <div className={editorStyles.maxCharacter} secondary={secondary}>
                {editorState.getCurrentContent().getPlainText('').length}/{maxCharacters}
            </div>}
            
        </StyledTextInput>
    )
}
PostContent.propTypes = {
    onMentionChange:PropTypes.func,
    large:PropTypes.bool,
    setEditorState:PropTypes.func,
    editorState:PropTypes.object,
    maxCharacters:PropTypes.number,
    placeHolder:PropTypes.string,
    showWordCount:PropTypes.bool,
    secondary:PropTypes.bool
}

export default PostContent;