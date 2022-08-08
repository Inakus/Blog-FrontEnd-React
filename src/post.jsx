import React, { useState } from "react";
import axios from "axios";

export default function Post(props){

    const url = props.url;

    const params = new URLSearchParams();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function createPost(){
        params.append('title', title);
        params.append('content', content);
        axios.post(url, params).then((err) => {
            !err ? alert(err) : alert('Succesfully added new Blog Post');
        })
        setContent('');
        setTitle('');
    };

    function handleContentChange(event){
        setContent(event.target.value);
    };

    function handleTitleChange(event){
        setTitle(event.target.value);
    }

    function disableButton(){
        if(title === '' || content === ''){
            return true;
        }else{
            return false;
        }
    }

    return (
        <div className="container mx-auto">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="xl2:flex xl2:items-center mb-6">
                    <div className="xl2:w-1/3">
                        <label className="block text-gray-500 font-blod xl2:text-right mb-1 md:mg-0 pr-4">Title</label>
                    </div>
                    <div className="xl2:w-2/3">
                        <input value={title} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-title" onChange={handleTitleChange} type='text' placeholder="Title"></input>
                    </div>
                    <div className="xl2:flex xl2:items-center mb-6">
                    <div className="xl2:w-1/3">
                        <label className="block text-gray-500 font-blod xl2:text-right mb-1 md:mb-0 pr-4">Content</label>
                    </div>
                    <div className="xl2:w-2/3">
                        <textarea value={content} rows='24' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-content" onChange={handleContentChange} type='text' placeholder="Content"></textarea>
                    </div>
                    </div>
                    <div className="xl2:flex xl2:items-center">
                        <div className="xl2:w-1/3"></div>
                        <div className="xl2:w-2/3">
                            <button type="submit" disabled={disableButton()} className="bg-blue-500 disabled:bg-gray-600 enabled:hover:bg-blue-700 text-white font-bold py-2 px-4 border disabled:border-gray-600 border-blue-700 rounded" onClick={createPost}>Add new Post to Blog</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}