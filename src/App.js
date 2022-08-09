import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import env from 'react-dotenv';
import AllBlogs from "./AllBlogs";
import Navbar from "./Navbar/Navbar";
import Search from "./Search";
import Home from "./Home";
import Post from "./Post";
import BlogPost from "./BlogPost";
import Error404 from "./Error404";


const client = axios.create({
  baseURL: env.API_URL
});


function App() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    async function getPost(){
      const response = await client.get('/');
      setPost(response.data)
    }
    getPost()
    // axios.get(urlAPI).then(response => { 
    //   return setPost(response.data)
    // })
  }, [post])

  function deletePost(newId){
    return axios.delete(env.API_URL + newId).then(alert('Post Deleted!'))
  }

  if(!post) return null;

  return (
   <>
   <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post url={env.API_URL}/>}></Route>
        <Route path="/search" element={<Search post={post} deletePost={deletePost}/>}></Route>
        <Route path="/blogs" element={<AllBlogs post={post}/>}></Route>
        <Route path="/blog/:id" element={<BlogPost post={post}/>}></Route>
        <Route path="*" element={<Error404 />}></Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
