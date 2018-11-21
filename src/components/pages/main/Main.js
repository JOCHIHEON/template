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
                        <div>
                            <div>
                                <Iframe height={250} src="https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=95D34E133DE47E7FFF5AA1F9C4B3F1CB3996&outKey=V122a288ee90aa2656a5189ad8acc5dcb98b16984ee9af152123889ad8acc5dcb98b1&controlBarMovable=true&jsCallable=true&isAutoPlay=true&skinName=tvcast_white" />
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <div>
                                <Row>
                                    <Col>
                                    <strong class="grey-text">득점</strong>
                                    <div class="grey-text">오세근</div>
                                    <div class="grey-text">[팀]</div>
                                    <em class="grey-text">17.0</em>
                                    </Col>
                                    <Col>
                                    <img src="http://kbl.or.kr/images/playersPhoto/290450.jpg" class="rounded-circle img-fluid" width="110" height="110"></img>
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
                                <div class="g__rank">
                                    <h3 class="title_c">PLAYER RANKING</h3>
                                        <Row>
                                        
                                            <Col>
                                                <div class="desc_block">
                                                    <strong>득점</strong>
                                                    <div class="name">오세근</div>
                                                    <div class="team">[안양KGC]</div>
                                                    <em>17.0</em>
                                                </div>
                                                <div class="frame_g"><div class="cover"><img src="http://kbl.or.kr/images/playersPhoto/290450.jpg" alt="오세근" class="rounded-circle img-fluid" width="110" height="110"></img></div></div>
                                            </Col>

                                            <Col>
                                                <div class="desc_block">
                                                    <strong>리바운드</strong>
                                                    <div class="name">오세근</div>
                                                    <div class="team">[안양KGC]</div>
                                                    <em>9.1</em>
                                                </div>
                                                <div class="frame_g"><div class="cover"><img src="/images/playersPhoto/290450.jpg" alt="오세근" class="rounded-circle img-fluid" width="110" height="110"></img></div></div>
                                            </Col>

                                            <Col>
                                                <div class="desc_block">
                                                    <strong>어시스트</strong>
                                                    <div class="name">박찬희</div>
                                                    <div class="team">[인천전자랜드]</div>
                                                    <em>6.0</em>
                                                </div>
                                                <div class="frame_g"><div class="cover"><img src="/images/playersPhoto/290380.jpg" alt="박찬희" class="rounded-circle img-fluid" width="110" height="110"></img></div></div>
                                        </Col>
                                    </Row>
                            </div>
                            </div>
                        </div>
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