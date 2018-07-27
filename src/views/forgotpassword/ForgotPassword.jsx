import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export default class forgotpassword extends Component {

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <h1>Forgot Password</h1>
                                        <p className="text-muted">Please input your email</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="email" placeholder="Email" />
                                        </InputGroup>
                                        <center><Button color="primary" className="px-4">Submit</Button></center>
                                    </CardBody>
                                </Card>
                                
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}