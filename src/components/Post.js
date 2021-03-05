import React, { Component } from 'react'
import '../css/Post.css'
// debugger

export default class Post extends Component {
    render() {
        return (
            <div className="blog-post">
                <img src = {this.props.image}></img> 
                <div className="post-info">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                </div> 
            </div>
        )
    }
}
