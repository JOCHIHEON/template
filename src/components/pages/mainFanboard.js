import React from "react";
import { Container } from "mdbreact";
import FanBoard from "./board/FanBoard";

const mainFanboard = () => {
  return (
    <React.Fragment>
      <div>
        <main>
          <Container className="text-center">
            <FanBoard />
          </Container>
        </main>
      </div>
    </React.Fragment>
  );
};

export default mainFanboard;
