import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import { Fa, FormInline, Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button } from 'mdbreact';


const QnABoard = () => {
    
        return(
            <React.Fragment>
                <Card className="mb-5">
                    <CardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <Breadcrumb>
                            <BreadcrumbItem active>커뮤니티</BreadcrumbItem>
                            <BreadcrumbItem>Q&A</BreadcrumbItem>
                        </Breadcrumb>
                    </CardBody>
                    <Breadcrumb>
                        <Button color="grey" className="boardbtn_all" type="submit" href="/board/qna">전체</Button>           
                        <Button color="primary" className="board-write" type="submit" href="#">문의하기</Button>
                    </Breadcrumb>
                    <Card className="mb-5">
                            <Table>
                            <TableHead color="blue-grey lighten-4">
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>닉네임</th>
                                    <th>작성일</th>
                                    <th>조회수</th>
                                    <th>추천</th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                <tr>
                                <td>1</td>
                                <td><a>test</a></td>
                                <td>Mark</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td><a>test</a></td>
                                <td>Jacob</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td><a>test</a></td>
                                <td>Larry</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                            </TableBody>
                            </Table>
                        </Card>
                </Card>
            </React.Fragment>
        );
    
};
export default QnABoard;