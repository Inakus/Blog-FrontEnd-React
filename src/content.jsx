import React from "react";

export default function Content(props){
    return (
        <div>
            <h1 className="text-center text-4xl mb-4">{props.title}</h1>
            <p className="text-base mb-2">{props.content}</p>
        </div>  
    )
}