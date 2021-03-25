import React,{useContext,useState} from 'react'

import { Main } from '../../styles/globalStyles';
import {AppContext} from '../../Context/AppContext'


import DisplayPost from '../../Components/Post'
import CustomModal from '../../Components/NewPost/Modal'
import NewPostForm from '../../Components/Forms/NewPostForm'
import NewPostButton from '../../Components/Buttons/NewPostButton'

import Post from '../../Classes/post'


import agreementIcon from '../../assets/images/agreement.svg'
/**
 * 
 * @returns Home page
 */
const Home = ()=>{
    const {contextPosts , setContextPosts} = useContext(AppContext);
    const [openModal,setOpenModal] = useState(false)
    const handleSubmitPost = (kudosPerson,editorStateCurrentContent,groupSelected,kudosSelected)=>{
        setOpenModal(false);
        const newPost = new Post(new Date(),editorStateCurrentContent,kudosPerson,groupSelected,kudosSelected,contextPosts[0].id+1)
        setContextPosts([newPost,...contextPosts])
    }
    return (
        <Main>
            <NewPostButton onClick={()=>{
                setOpenModal(!openModal)
            }}/>
            {contextPosts.map(post=>(
                <DisplayPost key={post.id} post={post}/>
            ))}
                <CustomModal text='Utwórz kudos' icon={agreementIcon} open={openModal} closeModal={()=>{setOpenModal(false)}}>
                    <NewPostForm onSubmit={handleSubmitPost}/>
                </CustomModal>
        </Main>
    )
}
export default Home;