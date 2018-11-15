import React from 'react';
import { MDBFooter, Fa } from 'mdbreact';
import { Col, Container, Row } from "mdbreact";
import Footerlogo from "../assets/footerlogo.jpg";

const Footer = () => {
    return (
        <MDBFooter color="black" className="text-center font-small darken-2">
            <div className="pt-4">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="3">
                    <div className="pb-4">
                        <img src={Footerlogo} width="71px" height="58px"/>
                    </div>
                    </Col>
                    <Col md="5">
                    <p>
                    <Fa icon="dribbble" className="mr-3"/>농구구기록실 rebound.com(리바운드)는 농구팬들을 위해운영되는 사이트입니다.
                    </p>
                    <p><Fa icon="dribbble" className="mr-3"/>리바운드에서 제공하는 한국 프로농구 기록및 통계데이터는 오류가 생기면  KBL과 차이가 있을 수 있습니다.
                    </p>
                    <p>
                    <Fa icon="dribbble" className="mr-3"/>이점 유의 하여 사용 하시길 바랍니다. 이에 따른 법적책임은 리바운드에서 책임지지 않습니다.
                    </p>
                    </Col>
                    <Col md="4">
                    <h5 className="text-md-right">The makers</h5>
                    <ul>
                    <li className="list-unstyled text-md-right">
                        <a href="#!">Jo Chiheon</a>
                        <Fa icon="github" className="mr-3"/>
                    </li>
                    <li className="list-unstyled text-md-right">
                        <a href="#!">Park Gyuwon</a>
                        <Fa icon="github" className="mr-3"/>
                    </li>
                    <li className="list-unstyled text-md-right">
                        <a href="#!">Choi Myeonggwon</a>
                        <Fa icon="github" className="mr-3"/>
                    </li>
                    </ul>
                    </Col>
                </Row>
            </Container>
                <hr className="my4"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://rbd.javajs.net"> rbd.javajs.net </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;