import React from 'react';
import { Container } from 'mdbreact';
import FreeBoard from './board/FreeBoard';

const mainFreeboard =  () => {
  return (
    <React.Fragment>
      <div>
        <main>                
          <Container className="text-center">       
           <FreeBoard/>
          </Container>
        </main>
      </div>
    </React.Fragment>
  )
}

export default mainFreeboard;