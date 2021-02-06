import Modal from 'react-bootstrap/Modal'
import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap'


class TeacherForm extends Component {

    state = {
        staffNo: '',
        firstName: '',
        lastName: '',
        level: '',
        ClassHeld: ''
    }

    handleSubmit = () => {
        const { onSubmit } = this.props;
        onSubmit(this.state)
    }

    render() {
        const { onHide } = this.props;

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Teacher
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>Centered Modal</h4> */}
                    <Form>
                        <Form.Control
                            placeholder="Staff No"
                            onChange={e => this.setState({ staffNo: e.target.value })}
                        /><br/>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    placeholder="First name"
                                    onChange={e => this.setState({ firstName: e.target.value })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="Last name"
                                    onChange={e => this.setState({ lastName: e.target.value })}
                                />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    placeholder="Level"
                                    onChange={e => this.setState({ level: e.target.value })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="Class"
                                    onChange={e => this.setState({ ClassHeld: e.target.value })}
                                />
                            </Col>

                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSubmit}>Submit</Button>

                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default TeacherForm;
