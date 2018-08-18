import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
export default class Police extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="animated fadeIn">
                <Col>
                    <Card>
                        <CardHeader>
                        <i className="fa fa-align-justify"></i> Data Police
                         </CardHeader>
                        <CardBody>
                        <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Date registered</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        )
    }

}