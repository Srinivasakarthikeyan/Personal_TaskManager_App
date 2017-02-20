
import React, { Component } from 'react';
import CardBox from './CardBox';
import CreateCardModal from './modals/CreateCardModal';

class ListBox extends Component{

    constructor(){
        super();
        this.state = { showCreateModal: false }
        this.deleteList = this.deleteList.bind(this);
        this.addNewCard = this.addNewCard.bind(this);
    }

    openCreateModal(){
        this.setState({
                showCreateModal: true
            })
    }

    closeCreateModal(){
        this.setState({
            showCreateModal: false
        })
    }

    deleteList(){
        this.props.deleteList(this.props.list.listId);
    }

    addNewCard(){
        this.props.createCard(this.props.list.listId,"This is a New Card");
    }

    render() {
        console.log(this.props);

        let allCards = this.props.list.cards.map((card)=>{
                        return <CardBox 
                        key={card.cardId}
                        card={card}
                        deleteCard={this.props.deleteCard}
                        addComment={this.props.addComment}
                        listId ={this.props.list.listId}
                        />})

        return (
            <div style={{width: '450px',border:'1px solid',minHeight:'150px', padding:'15px'}}>
                <div>
                    <div style={{marginLeft: '299px'}}><button className="btn-danger" onClick={this.deleteList} >{"Delete this List"}</button></div>
                    <div><h4 className="page-header" style={{clear:'both',padding:'5px',margin:'0px'}}>{"List"+ this.props.list.listId}</h4></div>
                    
                </div>
                {allCards}
                <div style={{padding: '10px 0px 0px 0px'}}>
                    <button className="btn-primary" onClick={this.openCreateModal.bind(this)}>{"Add New card"}</button>
                </div>
                <CreateCardModal showModal={this.state.showCreateModal} closeModal={this.closeCreateModal.bind(this)}
                        createCard = {this.props.createCard.bind(this)} listId={this.props.list.listId}></CreateCardModal>
            </div>
        );
    }
    
}


export default ListBox
