import React, { Component } from 'react';
import image from '../images/facts.jpg';
import '../css/Home.css'
export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <h1>Welcome!</h1>
                <img src={image} alt="" className="img-home"/>
            </div>
        )
    }
}
