/* eslint-disable react/prop-types */
import React,{createContext,useState} from 'react'
import Post from '../Classes/post';
import PostsJSON from '../Data/posts.json';

//Custom data storage (store) comonent with usage of Context API.


//reads data from static JSON file and return array of Post objects
const readDataFromJSON = ()=>{
    let tempPostsArray = PostsJSON.map(post=>{
        return new Post(new Date(1968, 3, 4, 19, 5, 0),post.content,post.kudosPerson,post.postGroup,post.kudosType,post.id);
    })
    return tempPostsArray;
}

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [contextPosts,setContextPosts] = useState(readDataFromJSON());  
    return (
    <AppContext.Provider value={{contextPosts,setContextPosts}}>
        {props.children}
    </AppContext.Provider>)
}
