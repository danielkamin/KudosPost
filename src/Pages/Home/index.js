import React,{useContext} from 'react'
import { Main } from '../../styles/globalStyles';
import {AppContext} from '../../Context/AppContext'
import StyledPost from '../../Components/Post'
import Modal from '../../Components/NewPost/Modal'
import NewPost from '../../Components/NewPost/Form'
/**
 * 
 * @returns Home page
 */
const Home = ()=>{
    const {contextPosts} = useContext(AppContext);
    return (
        <Main>
            {contextPosts.map(post=>(
                <StyledPost key={post.id} author={post.author} content={post.content} commentsCount={post.commentsCount} likesCount={post.likesCount} kudos={post.kudos} group={post.group}/>
            ))}
                <Modal>
                    <NewPost/>
                </Modal>
        </Main>
    )
}
export default Home;