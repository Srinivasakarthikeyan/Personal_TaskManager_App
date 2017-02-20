
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import React, {Component} from 'react';

class CreateCardModal extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false
        },
        this.hideModal = this.hideModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.createCard = this.createCard.bind(this);
    }

    componentDidMount(){
        this.props.showModal ? this.openModal() : this.hideModal();
    }

    openModal(){
        this.setState({
            isOpen: true
        });
    };

    hideModal(){
        this.setState({
            isOpen: false
        });
        this.props.closeModal();
    };

    createCard(){
        //TODO - handle validations separately
        if(this.refs.cardName.value!==''){
            this.props.createCard(this.props.listId,this.refs.cardName.value);
            this.setState({
                isOpen: false
            });
            this.props.closeModal();
            this.refs.cardName.value = "";
        }
    }

    
  
  render() {
 
    return (
        <Modal isOpen={this.props.showModal} onRequestHide={this.hideModal}>
        <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Create Card</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <input type="text" ref="cardName" placeholder="Enter your card description"/>
        </ModalBody>
        <ModalFooter>
            <button className="btn-primary" onClick={this.createCard}>
            Create
            </button>
        </ModalFooter>
        </Modal>
        
    )
  }
}

export default CreateCardModal;