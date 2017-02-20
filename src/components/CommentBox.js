
import React, { Component } from 'react';
import Comment from './Comment'

class CommentBox extends Component{

    render() {
        console.log(this.props);
        return (
            <div style={{width: '200px',border:'1px solid',minHeight:'0px'}}>
                <div style={{display:'flex'}}>{this.props.comment.commentedDate}</div>
                <div>{ this.props.comment.commentDesc }</div>
            </div>
        );
    }

}

export default CommentBox;
