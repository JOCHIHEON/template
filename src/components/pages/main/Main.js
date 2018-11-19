import React, { Component } from 'react';
import { Iframe, Row, Col, Card, CardHeader ,CardBody } from 'mdbreact';
class Main extends Component {
    
    render(){
        return (
        <React.Fragment>
            <Row>
                <Col md="3">
                    <Row>
                        today중계
                    </Row>
                    <Row>
                        랭킹
                    </Row>
                </Col>
                <Col md="9">
                    <Row>
                        <Card>
                            <CardBody>
                                <Iframe height={250} src="https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=95D34E133DE47E7FFF5AA1F9C4B3F1CB3996&outKey=V122a288ee90aa2656a5189ad8acc5dcb98b16984ee9af152123889ad8acc5dcb98b1&controlBarMovable=true&jsCallable=true&isAutoPlay=true&skinName=tvcast_white" />
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <CardHeader>
                                <h4>PLAYER LANKING</h4>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>
                                    <p class="grey-text">득점</p><p class="grey-text">오세근</p><p class="grey-text">[팀]</p><p class="grey-text">17.0</p>
                                    </Col>
                                    <Col>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-fluid" width="110" height="110"></img>
                                    </Col>
                                    <Col>
                                    <p class="grey-text">득점</p><p class="grey-text">오세근</p><p class="grey-text">[팀]</p><p class="grey-text">17.0</p>
                                    </Col>
                                    <Col>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid" width="110" class="rounded-circle img-fluid" width="110" height="110"></img>
                                    </Col>
                                    <Col>
                                    <p class="grey-text">득점</p><p class="grey-text">오세근</p><p class="grey-text">[팀]</p><p class="grey-text">17.0</p>
                                    </Col>
                                    <Col>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-fluid" width="110" height="110"></img>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row>
                무비클립
            </Row>
            <Row>
                뉴스
            </Row>
        </React.Fragment>
        );
    }
    
};
export default Main;