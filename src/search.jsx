import React, { useEffect, useState } from "react";
import Card from "./card";

export default function Search(props){  

    const [find, setFind] = useState('');
    const [search, setSearch] = useState('');
    const [post, setPost] = useState([{}]);

    function findPost(e){
        setFind(e.target.value);
    };

    function handleClick(){
        setSearch(find);
    };

    function deletePost(newId){
        props.deletePost(newId);
    }

    useEffect(() => setPost(props.post), [props.post])

    return (
        <>
        <div className="container mx-auto">
            <div className="row">
                <div className="mb-3 pt-0">
                    <form onClick={e => e.preventDefault()}>
                        <div className="xl2:flex xl2:items-center mb-6">
                            <div className="xl2:w-1/3">
                                <label className="block text-gray-500 font-blod xl2:text-right mb-1 md:mg-0 pr-4">Search</label>
                            </div>
                                <input onChange={findPost} type="text" placeholder="Search" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
                            </div>
                        <div className="xl2:flex xl2:items-center">
                            <div className="xl2:w-1/3"></div>
                            <div className="xl2:w-2/3">
                                <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleClick}><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {post.map((element) => {
                        return element.title === search &&  <Card key={element._id} deletePost={deletePost} id={element._id} title={element.title} content={element.content}></Card> 
                    })}
                </div>
            </div>
        </div>
                
        </>
    )
}