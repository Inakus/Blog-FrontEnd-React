import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./card";

export default function Search(){

    const [post, setPost] = useState(null)
    const [find, setFind] = useState('');
    const [search, setSearch] = useState('')

    const url = 'http://localhost:4000/';

    useEffect(() => {
        axios.get(url).then(response => {
        setPost(response.data)  
        });
    }, [])

    function findPost(e){
        setFind(e.target.value);
    }

    function handleClick(){
        setSearch(find)
    }

    if(!post) return null;

    return (
        <>
            <div className="mb-3 pt-0">
                <input onChange={findPost} type="text" placeholder="Search" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                <button onClick={handleClick} className="self-strech bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full mt-3" type="button">
                    Search
                </button>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {post.map((element, index) => {
                        return element.title === search &&  <Card key={index} title={element.title} content={element.content}></Card> 
                    })}
                </div>
        </>
    )
}