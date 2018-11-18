import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import { Fa, FormInline, Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button } from 'mdbreact';


const FreeBoard = () => {
    
        return(
            <React.Fragment>
                <Card className="mb-5">
                <CardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                    <Breadcrumb>
                        <BreadcrumbItem active>커뮤니티</BreadcrumbItem>
                        <BreadcrumbItem>자유게시판</BreadcrumbItem>
                    </Breadcrumb>
                    <FormInline className="md-form m-0">
                        <input className="form-control form-control-sm" type="search" placeholder="검색하기" aria-label="Search"/>
                        <Button size="sm" color="primary" className="my-0" type="submit" href="#"><Fa icon="search" /></Button>
                    </FormInline>
                </CardBody>
                    <Card className="mb-5">
                        <Breadcrumb>
                            <Button color="grey" className="boardbtn_all" type="submit" href="/board/free">전체</Button>
                            <Button color="red" className="boardbtn_best" type="submit" href="#">베스트</Button>           
                            <Button color="primary" className="board-write" type="submit" href="#">글쓰기</Button>
                        </Breadcrumb>
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
export default FreeBoard;