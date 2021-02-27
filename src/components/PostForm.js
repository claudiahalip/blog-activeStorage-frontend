import React, { Component } from 'react'
import '../css/PostForm.css'



export default class PostForm extends Component {
    state = {
        title: "",
        content: "",
        featured_image: null
    }

    handleChange = (e)=>{
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleImage = (e)=>{
        this.setState({
            featured_image: e.target.files[0]
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        
    }

    render() {
        return (
            <div className="postForm">
                <p>Create your blog post:</p>
                <div className="form">
                <form onSubmit ={this.handleSubmit}>
                    <label>Title:</label>
                    <input 
                    className="select"
                    type="text"></input>
                    <label>Content:</label>
                    <input 
                    className="select"
                    type="text"></input>
                    
                    <input type="file" className="chooseFile"></input>
                    <input type = "submit" className="submit" ></input>
                </form>
                </div>
            </div>
        )
    }
}
