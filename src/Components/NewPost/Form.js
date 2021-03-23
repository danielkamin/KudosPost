import React,{useEffect} from 'react'

//form components input
import CustomButton from '../Button/index'
import TextInput from '../TextInput/index'
import CustomSelect from '../Select'
import Kudos from '../Kudos/index'

//data import
import groups from '../../Data/groups.json'
import kudosTypes from '../../Data/kudosTypes'

//styles import


const NewPost= ()=>{
    useEffect(()=>{
    },[])
    const createKudosPost = (e)=>{
        e.preventDefault();
        console.log()
    }
    return (
        <form onSubmit={createKudosPost}>
            <TextInput large/>
            <TextInput />
            {console.log(kudosTypes)}
            {kudosTypes.map(kudos=>(
                <Kudos key={kudos.id} text={kudos.text} imageUrl={kudos.imageUrl} />
            ))}
            <CustomSelect items={groups}/>
            <CustomButton type='submit'>Opublikuj</CustomButton>
        </form>
    )
}
export default NewPost;
