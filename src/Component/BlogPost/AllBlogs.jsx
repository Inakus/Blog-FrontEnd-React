import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Content from "./Content";

export default function AllBlogs(props){

    const [post, setPost] = useState([]);

    useEffect(() => setPost(props.post), [props.post])

    return (
        <>
            <div className="container mx-auto">
                <div className="row">
                {post.map((element, index) => {
                    return(
                        <div key={index} className="text-center">
                            <Content title={element.title} content={element.content?.slice(0,100)}></Content>
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