import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class loginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} color="red">Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} side position="top-right" size="sm">
          <ModalHeader toggle={this.toggle}>로그인</ModalHeader>
          <ModalBody>
            (...)
          </ModalBody>
          <ModalFooter>
            <Button color="primary">확인</Button>
            <Button color="secondary" onClick={this.toggle}>취소</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  } 
  }

export default loginModal;