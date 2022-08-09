import { useState } from "react"

export default function PostForm(props){

    const [title, setTitle] = useState('');
    const [content, setContent] =  useState('');

    function changePost(event){
        if(event.target.name === 'title') return setTitle(event.target.value);
        if(event.target.name === 'content') return setContent(event.target.value);
    }

    function createPost(){
        props.createPost(title, content);
        setContent('');
        return setTitle('');
    }

    function disableButton(){
        if(title === '' || content === ''){
            return true;
        }else{
            return false;
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
        <div className="xl2:flex xl2:items-center mb-6">
            <div className="xl2:w-1/3">
                <label className="block text-gray-500 font-blod xl2:text-right mb-1 md:mg-0 pr-4">Title</label>
            </div>
            <div className="xl2:w-2/3">
                <input name="title" value={title} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-title" onChange={changePost} type='text' placeholder="Title"></input>
            </div>
            <div className="xl2:flex xl2:items-center mb-6">
            <div className="xl2:w-1/3">
                <label className="block text-gray-500 font-blod xl2:text-right mb-1 md:mb-0 pr-4">Content</label>
            </div>
            <div className="xl2:w-2/3">
                <textarea name="content" value={content} rows='24' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-content" onChange={changePost} type='text' placeholder="Content"></textarea>
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
    )
}