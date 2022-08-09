import axios from "axios";
import PostForm from "./PostForm";

export default function Post(props){

    const url = props.url;

    const params = new URLSearchParams();

    function createPost(newTitle, newContent){
        params.append('title', newTitle);
        params.append('content', newContent);
        return axios.post(url, params).then((err) => {
            return !err ? alert(err) : alert('Succesfully added new Blog Post');
        })
    };

    return (
        <div className="container mx-auto">
           <PostForm createPost={createPost}/>
        </div>
    )
}