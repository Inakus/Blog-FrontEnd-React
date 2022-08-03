import React from "react";

export default function Content(props){
    return (
        <div className="col col-lg-6">
            <div className="card" style={{width: '19.5rem', marginTop: '15px'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-subtitle mb-2 text-muted">{props.content}</p>
                </div>
            </div>
        </div>  
    )
}