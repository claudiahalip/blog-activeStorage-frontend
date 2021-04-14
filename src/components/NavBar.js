import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../css/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/"><p className="navBarLink">Home</p></Link>

                <Link to="/posts"><p className="navBarLink">Posts</p></Link>

                <Link to="/posts/new"><p className="navBarLink">Create a new post</p></Link>
                
            </div>
        )
    }
}