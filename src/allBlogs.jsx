import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./content";
import { Link } from "react-router-dom";

const apiURL = 'http://localhost:4000/';

export default function AllBlogs(props){

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(apiURL).then(response => {
            setPost(response.data);
        });
    }, []);

    if(!post) return null

    return (
        <>
            <div className="container mx-auto">
                <div className="row">
                {post.map((element, index) => {
                  return(
                    <div key={element._id} className="text-center">
                        <Content title={element.title} content={element.content.slice(0,100)}></Content>
                        <Link className="text-blue-500" to={'/blog/' + element._id}>See More</Link>
                        <hr />
                    </div>
                    )
                })}
                </div>
            </div>
        </>
    );
}