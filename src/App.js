import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBlogs from "./allBlogs";
import Navbar from "./Navbar/Navbar";
import Search from "./search";
import Home from "./home";
import Post from "./post";

// const urlAPI = "http://localhost:4000/"

function App() {
  // const [post, setPost] = useState(null)

  // useEffect(() => {
  //   axios.get(urlAPI).then(response => {
  //     setPost(response.data)  
  //   });
  // }, [])

  // if(!post) return null;

  return (
   <>
   <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/post" element={<Post />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/blogs" element={<AllBlogs />}></Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
