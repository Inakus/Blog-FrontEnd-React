import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllBlogs from "./Component/BlogPost/AllBlogs";
import Navbar from "./Component/Navbar";
import Search from "./Component/Search/Search";
import Home from "./Component/Home";
import Post from "./Component/Postform/Post";
import BlogPost from "./Component/BlogPost/BlogPost";
import Error404 from "./Component/Error404";
import Edit from "./Component/Postform/Edit";

export const apiUrl = process.env.REACT_APP_APIURL;

const client = axios.create({
  baseURL: apiUrl,
});

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/").catch((err) => console.log(err));
      setPost(response.data);
    }
    getPost();
  }, [post]);

  function deletePost(newId) {
    return axios.delete(apiUrl + newId).then(alert("Post Deleted!"));
  }

  if (!post) return null;

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post url={apiUrl} />}></Route>
          <Route
            path="/search"
            element={<Search post={post} deletePost={deletePost} />}
          ></Route>
          <Route path="/blogs" element={<AllBlogs post={post} />}></Route>
          <Route path="/blog/:id" element={<BlogPost post={post} />}></Route>
          <Route path="/blog/:id/edit" element={<Edit />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
