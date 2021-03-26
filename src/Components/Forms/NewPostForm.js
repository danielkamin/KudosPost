/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {EditorState,convertToRaw} from "draft-js";

//form components input
import SimpleButton from '../Buttons/SimpleButton'
import PostContent from '../Editor/PostContent'
import KudosMention from '../Editor/KudosMention'
import CustomSelect from '../Select/Select'
import Kudos from '../Kudos/Kudos'

//data import
import groups from '../../Data/groups.json'
import kudosTypes from '../../Data/kudosTypes'

//styles import
import styled,{css} from 'styled-components';


//styles declaration
const StyledForm = styled.form`
display:flex;
flex-direction:column;
`
const StyledDiv = styled.div`
display:flex;
justify-content:space-between;
`
const StyledSubTitle = styled.p`
font-size:14px;
font-weight:bold;
margin-bottom:10px;
margin-top:20px;
`
const LastSubTitle = styled(StyledSubTitle)`
margin-top:0;
`
const StyledError = styled.p`
margin-top:10px;
text-align:center;
color:red;
`

const SelectableKudos = styled(Kudos)`
${({selected})=>
selected? css`
    background:${props=>props.theme.colors.border.primary};
    border:1px solid ${props=>props.theme.colors.details.primary}
    `:css`
    background:${props=>props.theme.colors.background.secondary};
        border:1px solid ${props=>props.theme.colors.border.primary};
    `}
`


//component that handles new post submission 
const NewPostForm= ({onSubmit})=>{
    const [kudosPerson,setKudosPerson] = useState(()=>{return ''});
    const [editorMentionState, setEditorMentionState] = useState(() =>
        EditorState.createEmpty()
    );
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [errorMessage,setErrorMessage] = useState('')   
    const [groupSelected,setGroupSelected] = useState(groups[0])
    const [kudosSelected,setKudosSelected] = useState(kudosTypes[0].id)
    useEffect(()=>{
    },[])
    const handleKudosSelect = (e) =>{
        setKudosSelected(e)
    }
    const handleMentionChange = (e)=>{
        setKudosPerson(e.name)
    }
    const createKudosPost = (e)=>{
        e.preventDefault();
        if(editorState.getCurrentContent().getPlainText('').length>500) setErrorMessage('Przekroczono ilość znaków!')
        else if((editorState.getCurrentContent().getPlainText('').length==0)) setErrorMessage('Treść jest pusta!')
        else {
            setErrorMessage('')
            onSubmit(kudosPerson,convertToRaw(editorState.getCurrentContent()),groupSelected,kudosSelected);
            setEditorMentionState(()=>
            EditorState.createEmpty())
            setEditorState(()=>
            EditorState.createEmpty())
            setGroupSelected(groups[0])
            setKudosSelected(kudosTypes[0].id)
        }
    }
    return (
        <StyledForm onSubmit={createKudosPost}>
            <StyledError>
                {errorMessage}
            </StyledError>
            <div>
                <StyledSubTitle>Treść posta nad kudosem</StyledSubTitle>
                <PostContent large showWordCount={true}   editorState={editorState} setEditorState={setEditorState} maxCharacters={500}/>
            </div>
            <div>
                <StyledSubTitle>Wybierz osobę której przyznajesz kudos</StyledSubTitle>
                <KudosMention editorState={editorMentionState} setEditorState={setEditorMentionState} onMentionChange={handleMentionChange}/>
            </div>
            <StyledSubTitle>Wybierz kudos</StyledSubTitle>
            {kudosTypes.map(kudos=>(
                <SelectableKudos id={kudos.id} key={kudos.id} text={kudos.text} imageUrl={kudos.imageUrl} selected={kudosSelected === kudos.id ? true : false} onClick={()=>handleKudosSelect(kudos.id)}/>
            ))}
            <LastSubTitle>Wybierz grupę</LastSubTitle>
            <StyledDiv>  
                <CustomSelect items={groups} onChange={setGroupSelected} value={groupSelected}/>
                <SimpleButton type='submit'>Opublikuj</SimpleButton>
            </StyledDiv>        
        </StyledForm>
    )
}


NewPostForm.propTypes = {
    onSubmit:PropTypes.func.isRequired
}
export default NewPostForm;
