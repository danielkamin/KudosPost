import React,{useContext,useState} from 'react'

import { Main } from '../../styles/globalStyles';
import {AppContext} from '../../Context/AppContext'


import DisplayPost from '../../Components/Post/Post'
import CustomModal from '../../Components/Modal/Modal'
import NewPostForm from '../../Components/Forms/NewPostForm'
import NewPostButton from '../../Components/Buttons/NewPostButton'
import Container from '../../Components/Container/Container'
import Post from '../../Classes/post'
import agreementIcon from '../../assets/images/agreement.svg'


//Home page of the application
const Home = ()=>{
    const {contextPosts , setContextPosts} = useContext(AppContext);
    const [openModal,setOpenModal] = useState(false)

    //function that handles new post submitting
    //new Post() object is created and then stored in application context
    const handleSubmitPost = (kudosPerson,editorStateCurrentContent,groupSelected,kudosSelected)=>{
        setOpenModal(false);
        const newPost = new Post(new Date(),editorStateCurrentContent,kudosPerson,groupSelected.id,kudosSelected,contextPosts[0].id+1)
        setContextPosts([newPost,...contextPosts])
    }
    return (
        <Main>
            <Container size='sm'>
                <NewPostButton onClick={()=>{
                    setOpenModal(!openModal)
                }}/>
                {contextPosts.map(post=>(
                    <DisplayPost key={post.id} post={post}/>
                ))}
                    <CustomModal text='Utwórz kudos' icon={agreementIcon} open={openModal} closeModal={()=>{setOpenModal(false)}}>
                        <NewPostForm onSubmit={handleSubmitPost}/>
                    </CustomModal>
            </Container>
        </Main>
    )
}
export default Home;