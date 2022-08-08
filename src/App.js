import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBlogs from "./allBlogs";
import Navbar from "./Navbar/Navbar";
import Search from "./search";
import Home from "./home";
import Post from "./post";
import BlogPost from "./BlogPost";

const urlAPI = "http://localhost:4000/"


function App() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(urlAPI).then(response => { 
      setPost(response.data)
    })
  }, [post])

  function deletePost(newId){
    axios.delete(urlAPI + newId).then(alert('Post Deleted!'))
  }

  if(!post) return null;

  return (
   <>
   <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/post" element={<Post url={urlAPI}/>}></Route>
      <Route path="/search" element={<Search post={post} deletePost={deletePost}/>}></Route>
      <Route path="/blogs" element={<AllBlogs />}></Route>
      <Route path="/blog/:id" element={<BlogPost post={post}/>}></Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
