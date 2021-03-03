import React, { Component } from 'react'
// debugger
export default class Post extends Component {
    render() {
        return (
            <div>
                <p>test POST component</p>
                <p>{this.props.title}</p>
                
                <p>{this.props.content}</p>
                {/* <img src = {this.props.image}></img>                  */}
            </div>
        )
    }
}
