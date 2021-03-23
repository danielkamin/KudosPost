import React from 'react'
import Button from '../Button/index'
import styled from 'styled-components';
import TextInput from '../TextInput/index'


const StyledTextInput = styled(TextInput)`
min-height: ${props=>props.large? "120px":"30px"};
`



const NewPost= ()=>{

    const createKudosPost = (e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={createKudosPost}>
            <StyledTextInput large/>
            <StyledTextInput />
            <Button type='submit'>Opublikuj</Button>
        </form>
    )
}
export default NewPost;
