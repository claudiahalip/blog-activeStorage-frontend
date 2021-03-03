import React, { Component } from 'react'
import Post from './Post'
import default_image from '../images/default-image.jpg'

export default class Posts extends Component {

    constructor (){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/posts')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.getData(data)
        })
    }

    getData = (data)=>{
      this.setState({
          posts: data
      })
    }

    renderPosts = () =>{

        return this.state.posts.map( post => { 
            console.log(post)
            return <Post  title = {post.title} 
            content={post.content} 
            image = {post.image ? post.image : default_image   }
            // image = {default_image}
            key = {post.id}/>

            // <div>
            // <div>{p.title}</div>
            // <div>{p.content}</div>
            // <div>{p.featured_image_attachment.filename}</div>
            // </div>
        })
    }

    render() {
        return (
            <div>
                <p>test  POSTS component</p>
                <Post   test={"test"}/>
                {this.renderPosts()}
            </div>
        )
    }
}
