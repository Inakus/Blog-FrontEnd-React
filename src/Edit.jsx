import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import { apiUrl } from "./App";
export default function Edit(props){

    const location = useLocation();
    const navigate = useNavigate();
    const {id, title, content} = location.state;
    const params = new URLSearchParams();

    function updatePost(newTitle, newContent, redirect){
        const newUrl = apiUrl + id;
        params.append('title', newTitle);
        params.append('content', newContent);
        axios.patch(newUrl, params);
        redirect && navigate('/blog/' + id);
    };
    
    return (
        <div className="container mx-auto">
            <PostForm id={id} title={title} content={content} createPost={updatePost}></PostForm>
        </div>
    );
};
