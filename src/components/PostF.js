import React from 'react';
import '../css/Post.css'

export default function PostF(props) {
    return (
        <div className="blog-post">
                <img src = {props.image} alt=""></img> 
                <div className="post-info">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                </div> 
                
        </div>
    )
}
