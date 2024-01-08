import { Tab } from "bootstrap";
import React, { Component } from "react";
import { Container, Row, Nav, Col,TabContent,TabPane,TabContainer   } from "react-bootstrap";

export default class Resume extends Component {
    render() {
        return (
            <Container>
                <TabContainer id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <p>Tab 1 content</p>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <p>Tab 2 content</p>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <p>Tab 1 content</p>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <p>Tab 2 content</p>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        );
    }
}