import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/posts')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.postInfo(data)
        })
    }

    postInfo = (data) =>{

        return data.map( p => { 
            <Post  title = {p.title } content = {p.content ? p.content : "no content"} />

            // <div>
            // <div>{p.title}</div>
            // <div>{p.content}</div>
            // <div>{p.featured_image_attachment.blob.filename}</div>
            // </div>
        })
    }

    render() {
        return (
            <div>
                <p>test  POSTS component</p>
                <Post   test={"test"}/>
            </div>
        )
    }
}
