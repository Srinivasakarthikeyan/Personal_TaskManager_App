import React, { Component } from 'react';

class Comment extends Component{

    render() {
        return (
            <div style={{width: '200px',border:'1px solid',height:'100px'}}>
                <div style={{display:'flex'}}>{ "Date" }</div>
                <div>{ "This is 1st comment" }</div>
            </div>
        );
    }

}

export default Comment;