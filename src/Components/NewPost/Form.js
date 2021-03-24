/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import {EditorState,convertToRaw} from "draft-js";

//form components input
import CustomButton from '../Button/index'
import TextInput from '../TextInput/index'
import CustomSelect from '../Select'
import Kudos from '../Kudos/index'
import PersonSelect from '../PersonSelect/index'

//data import
import groups from '../../Data/groups.json'
import kudosTypes from '../../Data/kudosTypes'

//styles import
import styled from 'styled-components';
import PropTypes from 'prop-types'
//styles
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

const NewPost= ({onSubmit})=>{
    const [kudosPerson,setKudosPerson] = useState('')
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );   
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
        onSubmit(kudosPerson,convertToRaw(editorState.getCurrentContent()).blocks[0].text,groupSelected,kudosSelected);
    }
    return (
        <StyledForm onSubmit={createKudosPost}>
            <div>
                <StyledSubTitle>Treść posta nad kudosem</StyledSubTitle>
                <TextInput large onMentionChange={handleMentionChange} editorState={editorState} setEditorState={setEditorState}/>
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
                <CustomButton type='submit'>Opublikuj</CustomButton>
            </StyledDiv>        
        </StyledForm>
    )
}
NewPost.propTypes = {
    onSubmit:PropTypes.func.isRequired
}
export default NewPost;
