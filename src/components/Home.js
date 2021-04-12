import React, { Component } from 'react';
import image from '../images/facts.jpg';
import '../css/Home.css'
export default class Home extends Component {

    state = {
        image: null
    }

    onImageChange = (event)=>{
        if(event.target.files && event.target.files[0]){
            let img=event.target.files[0]
            this.setState({
                image: URL.createObjectURL(img)
            })
        }
    }
    render() {
        return (
            <div className="home-page">
                <h1>Welcome!</h1>
                <img src={image} alt="" className="img-home"/>
                {/* test upload image */}
                <img src={this.state.image} alt=""></img>
                <h2>Select image</h2>
                <input type = "file" name="image" onChange={this.onImageChange}></input>
            </div>
        )
    }
}
