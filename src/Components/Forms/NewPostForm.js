/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {EditorState,convertToRaw} from "draft-js";

//form components input
import SimpleButton from '../Buttons/SimpleButton'
import PostContent from '../Editor/PostContent'
import CustomSelect from '../Select'
import Kudos from '../Kudos/index'
import PersonSelect from '../PersonSelect/index'

//data import
import groups from '../../Data/groups.json'
import kudosTypes from '../../Data/kudosTypes'

//styles import
import styled from 'styled-components';



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
const StyledError = styled.p`
margin-top:10px;
text-align:center;
color:red;
`
const NewPostForm= ({onSubmit})=>{
    const [kudosPerson,setKudosPerson] = useState('')
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [errorMessage,setErrorMessage] = useState('')   
    const [groupSelected,setGroupSelected] = useState(+groups[0].id)
    const [kudosSelected,setKudosSelected] = useState(kudosTypes[0].id)
    useEffect(()=>{
    },[])
    const handleKudosSelect = (e) =>{
        setKudosSelected(e)
    }
    const handleSelectGroupChange = (e)=>{
        setGroupSelected(+e.target.value)
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
        }
    }
    return (
        <StyledForm onSubmit={createKudosPost}>
            <StyledError>
                {errorMessage}
            </StyledError>
            <div>
                <StyledSubTitle>Treść posta nad kudosem</StyledSubTitle>
                <PostContent large onMentionChange={handleMentionChange} editorState={editorState} setEditorState={setEditorState} maxCharacters={500}/>
            </div>
            <div>
                <StyledSubTitle>Wybierz osobę której przyznajesz kudos</StyledSubTitle>
                <PersonSelect person={kudosPerson} deleteKudos={()=>setKudosPerson('')}/>
            </div>
            <StyledSubTitle>Wybierz kudos</StyledSubTitle>
            {kudosTypes.map(kudos=>(
                <Kudos id={kudos.id} key={kudos.id} text={kudos.text} imageUrl={kudos.imageUrl} selected={kudosSelected === kudos.id ? true : false} onClick={handleKudosSelect}/>
            ))}
            <StyledSubTitle>Wybierz grupę</StyledSubTitle>
            <StyledDiv>  
                <CustomSelect items={groups} onChange={handleSelectGroupChange} value={groupSelected}/>
                <SimpleButton type='submit'>Opublikuj</SimpleButton>
            </StyledDiv>        
        </StyledForm>
    )
}
NewPostForm.propTypes = {
    onSubmit:PropTypes.func.isRequired
}
export default NewPostForm;
