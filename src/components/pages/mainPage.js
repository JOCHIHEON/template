import React from 'react';
import { Container } from 'mdbreact';
import { Iframe, Card } from "mdbreact";
import main_schedule from './main_schedule';
import FreeBoard from './board/FreeBoard';
import Main from './main/Main';
import Chat from './main/Chat';
const mainPage =  () => {
  return (
    <React.Fragment>
    <Card>
      <Chat/>
    </Card>
      <Container className="text-center">
        <Main/>
      </Container>
    </React.Fragment>
  )
}

export default mainPage;