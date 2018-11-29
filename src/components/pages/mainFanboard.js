import React from "react";
import { Container } from "mdbreact";
import FanBoard from "./board/FanBoard";
import MainSchedule from "./MainSchedule";

const mainFanboard = () => {
  return (
    <React.Fragment>
      <div>
        <main>
          <Container className="text-center">
            <FanBoard />
            <MainSchedule />
          </Container>
        </main>
      </div>
    </React.Fragment>
  );
};

export default mainFanboard;
