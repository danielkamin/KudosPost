/* eslint-disable react/prop-types */
import React,{createContext,useState} from 'react'
import PostsJSON from '../Data/posts.json';

const readDataFromJSON = ()=>{
    let tempPostsArray = PostsJSON.map(post=>{
        return post;
    })
    console.log(tempPostsArray)
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
