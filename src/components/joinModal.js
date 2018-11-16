import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Input } from 'mdbreact';

class Join extends React.Component {
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
      <Container>
        <Button onClick={this.toggle} color="mdb-color darken-3">회원가입</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm" side position="top-right">
          <ModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle}>회원가입</ModalHeader>
          <ModalBody>
            회원가입폼
          </ModalBody>
          <ModalFooter className="justify-content-center">
          <Button color="primary">회원가입</Button>
            <Button color="secondary" onClick={this.toggle}>닫기</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Join;