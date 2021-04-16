import React, { Component } from 'react';
import Post from './Post';
import default_image from '../images/default-image.jpg';

export default class Posts extends Component {

    constructor (){
        super()
        this.state = {
            posts: [],
            searchTerm: ""
        }
    }

    componentDidMount = () => {
    
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

    handleChange = (e) => {
       this.setState({
           searchTerm: e.target.value
       })
    }

    renderPosts = () =>{
        const filterdPosts = this.state.posts.filter( post =>{
            return post.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
        })
        if(this.state.searchTerm == ""){
        return this.state.posts.map( post => { 
            console.log(post)
            return <Post  title = {post.title} 
            content={post.content} 
            image = {post.image ? post.image : default_image   }
            key = {post.id}/>
        })
        }
        else{
            return filterdPosts.map( post => { 
                console.log(post)
                return <Post  title = {post.title} 
                content={post.content} 
                image = {post.image ? post.image : default_image   }
                key = {post.id}/>
            })
        }
    }

    render() {
       
        return (
            <div>
                <h1 className="postsTitle">Do you know?</h1>
                <div>
                    <label>Search:</label>
                    <input type="text" onChange={this.handleChange} value = {this.state.searchTerm}></input>
                </div>
                {this.renderPosts()}
            </div>
        )
    }
}
