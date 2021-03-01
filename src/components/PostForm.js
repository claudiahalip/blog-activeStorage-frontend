import React, { Component } from 'react';
import '../css/PostForm.css';
import { DirectUpload } from 'activestorage';

class PostForm extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            featured_image: {}
        }
    }

    handleChange = (e) => {
        
        if(e.target.name === 'featured_image'){
            this.setState({
                [e.target.name]: e.target.files[0]
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        } 
    }


    handleSubmit = (e)=>{
        e.preventDefault()
        console.log("merge????")
        let post = {
            title: this.state.title,
            content: this.state.content
        };

        fetch('http://localhost:3001/posts', {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }, 
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(resp => this.uploadFile(this.state.featured_image, resp))
        

    }

    uploadFile = (file, post) => {
       const upload = new DirectUpload(file, 'http://localhost:3001/rails/active_storage/direct_uploads')
       upload.create((error, blob) => {
           if(error){
               console.log(error)
           }else{
               fetch(`http://localhost:3001/posts/${post.id}`, {
                   method: 'PUT',
                   headers: {
                       'Content-Type': 'application/json',
                       'Accept': 'application/json'
                   },
                   body: JSON.stringify({featured_image: blob.signed_id})
               })
               .then(resp => resp.json())
            //    .then(data => console.log(data))
               .then(data => this.props.displayPost(data))
           }
           
       })
    }


    render() {
        return (
            <div className="postForm">
                <p>Create your blog post:</p>
                <div className="form">
                <form onSubmit = {this.handleSubmit}>
                    <label>Title:</label>
                    <input 
                    className="select"
                    type="text"
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    ></input>
                    <label>Content:</label>
                    <input 
                    className="select"
                    type="textarea"
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    ></input>
                    
                    <input type="file" 
                    className="chooseFile"
                    name="featured_image"
                    onChange={this.handleChange}
                    ></input>
                    <input type = "submit" className="submit" ></input>
                </form>
                </div>
            </div>
        )
    }
}

export default PostForm
