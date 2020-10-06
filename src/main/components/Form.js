import React from 'react';
import { Col, Row, InputGroup, FormControl, Form, Button } from 'react-bootstrap';

export default class AddItemForm extends React.Component {

    state = {
        title: '',
        description: '',
        day: "default"
    }

    submit = () => {
        this.props.onAdd({...this.state})
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleDayChange = (event) => {
        this.setState({
            day: event.target.value
        })
    } 
    
    render() {
        return (
            <Row>
                <Col md={3}>
                    <InputGroup >
                        <FormControl onChange={this.handleTitleChange} placeholder="Title" />
                    </InputGroup>
                </Col>
                <Col md={3}>
                    <InputGroup >
                        <FormControl onChange={this.handleDescriptionChange} placeholder="Description" />
                    </InputGroup>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Control onChange={this.handleDayChange} as="select" custom>
                            <option value="default">Select Day</option>
                            <option value="mon">Monday</option>
                            <option value="tue">Tuesday</option>
                            <option value="wed">Wednesday</option>
                            <option value="thu">Thursday</option>
                            <option value="fri">Friday</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Button onClick={this.submit}>
                        ADD
                </Button>
                </Col>
            </Row>

        )
    }
}
