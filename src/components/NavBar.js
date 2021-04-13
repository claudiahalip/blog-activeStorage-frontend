import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/posts"><p>Posts</p></Link>

                <Link to="/posts/new"><p>Create a new post</p></Link>
                
            </div>
        )
    }
}
