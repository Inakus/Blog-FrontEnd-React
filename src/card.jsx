import React from "react";

export default function Card(props){
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div>
                <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.content}
                    </p>
                </div>
        </div>
    )
}