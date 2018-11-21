import React, { Component } from "react";
import { Container } from "mdbreact";
import Main from "./main/Main";

class mainPage extends Component {
  render() {
    return (
      <Container className="text-center">
        <Main />
      </Container>
    );
  }
}

export default mainPage;
