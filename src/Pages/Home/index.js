import React,{useContext} from 'react'

import { Main } from '../../styles/globalStyles';
import {AppContext} from '../../Context/AppContext'


import DisplayPost from '../../Components/Post'
import CustomModal from '../../Components/NewPost/Modal'
import NewPost from '../../Components/NewPost/Form'

import Post from '../../Classes/post'


import agreementIcon from '../../assets/images/agreement.svg'
/**
 * 
 * @returns Home page
 */
const Home = ()=>{
    const {contextPosts , setContextPosts} = useContext(AppContext);
    const handleSubmitPost = (kudosPerson,editorStateCurrentContent,groupSelected,kudosSelected)=>{
        console.log(editorStateCurrentContent)
        const newPost = new Post(new Date(),editorStateCurrentContent,kudosPerson,groupSelected,kudosSelected,contextPosts[0].id+1)
        setContextPosts([newPost,...contextPosts])
    }
    return (
        <Main>
            {contextPosts.map(post=>(
                <DisplayPost key={post.id} post={post}/>
            ))}
                <CustomModal text='Utwórz kudos' icon={agreementIcon}>
                    <NewPost onSubmit={handleSubmitPost}/>
                </CustomModal>
        </Main>
    )
}
export default Home;