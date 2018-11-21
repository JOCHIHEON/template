import React from 'react';
import { Container, Col,Row } from 'mdbreact';
import { Iframe, Card } from "mdbreact";
import main_schedule from './main_schedule';
import FreeBoard from './board/FreeBoard';
import Main from './main/Main';

const mainPage =  () => {
  return (
    <React.Fragment>
      <Container className="text-center">
        <Main/>
      </Container>
    </React.Fragment>
  )
}

export default mainPage;