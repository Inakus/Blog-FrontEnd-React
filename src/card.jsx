import React from "react";
import { Link } from "react-router-dom";

export default function Card(props){

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <hr />
            <p className="text-gray-700 text-base">                    
                {props.content.slice(0,20)}
            </p>
            <ul className="flex flex-row list-none ml-auto justify-between">
                <li><Link className="px-3 py-2 flex items-center text-xs text-blue-500 hover:opacity-75" to={'/blog/' + props.id}>See More</Link></li>
                <li><button type="submit" onClick={() => {
                    return props.deletePost(props.id);
                }} className="px-3 py-2 flex items-center text-red-500 hover:opacity-75"><i className="fa-solid fa-trash-can"></i></button></li>
            </ul>
        </div>
    )
}