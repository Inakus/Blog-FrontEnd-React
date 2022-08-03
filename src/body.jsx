import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./content";

const apiURL = 'http://localhost:4000/';

export default function Body(props){

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(apiURL).then(response => {
            setPost(response.data);
        });
    }, []);

    if(!post) return null

    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center">
                {post.map((element, index) => {
                  return(
                        <Content key={index} title={element.title} content={element.content}></Content>
                    )
                })}
                </div>
            </div>
        </>
    );
}