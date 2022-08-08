import { useParams } from "react-router-dom";
import Content from "./content";

export default function BlogPost(props){

    const post = props.post;

    const params = useParams()

    return (
        <div className="container mx-auto">
            {post.map(element => {
                    return ( params.id === element._id &&
                    <Content key={element._id} title={element.title}  content={element.content}></Content>
                )
            })}
        </div>
    )
}