import React, { Component } from 'react';
import CommentBox from './CommentBox'

class CardBox extends Component{
    constructor(){
        super();
        this.deleteCard = this.deleteCard.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    deleteCard(){
        this.props.deleteCard(this.props.listId,this.props.card.cardId);
    }
    addComment(){
        this.props.addComment(this.refs.userComment.value, new Date(Date.now()).toLocaleString(),this.props.card.cardId,this.props.listId);
        this.refs.userComment.value = '';
    }
    render() {
        
        console.log(this.props);
        let allComments = this.props.card.comments.map((comment)=>{
                                        return <CommentBox 
                                        key={comment.commentId}
                                        comment={comment}
                                        />})
        return (
            <div style={{padding: '10px'}} >
                <div>
                    <h3 className="page-header" style={{width: '300px',margin:'0px'}}>{this.props.card.cardDesc}</h3>
                    <span style={{margin: '5px'}}><button className="btn-danger" onClick={this.deleteCard}>{"Delete card"}</button></span>
                    <span style={{margin: '5px'}}><button className="btn-primary" onClick={this.deleteCard}>{"Hide Comments"}</button></span>
                </div>
                <div style={{padding: '10px 0px'}}>
                    <textarea cols="40" rows="3" ref="userComment">
                    </textarea>
                </div>
                <div style={{padding: '10px 0px'}}>
                    <button className="btn-primary" onClick={this.addComment}>{"Add Comment"}</button>
                </div>
                <div style={{width: '200px',border:'1px solid',minHeight:'0px'}}>
                    {allComments}
                </div>
            </div>
        );
    }

}

export default CardBox;
