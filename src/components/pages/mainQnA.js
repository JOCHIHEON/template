import React from 'react';
import { Container } from 'mdbreact';
import QnABoard from './board/QnABoard';

const mainQnA =  () => {
  return (
    <React.Fragment>
      <div>
        <main>                
          <Container className="text-center">       
           <QnABoard/>
          </Container>
        </main>
      </div>
    </React.Fragment>
  )
}

export default mainQnA;