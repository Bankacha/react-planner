import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';


export default class DayWidget extends React.Component {

    state ={
        currentItems:[]
    }

    setCurrentItems = (dayKey) => {
        const current = this.props.days[dayKey];

        this.setState({
            currentItems: current
        })
    }



    render() {
        return (
            <Row className="justify-content-around mt-5">
                <Col md={4}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Custom select</Form.Label>
                        <Form.Control onChange={(e)=>{this.setCurrentItems(e.target.value)}} as="select" custom>
                            <option value="default">Select Day</option>
                            <option value="mon">Monday</option>
                            <option value="tue">Tuesday</option>
                            <option value="wed">Wednesday</option>
                            <option value="thu">Thursday</option>
                            <option value="fri">Friday</option>
                        </Form.Control>
                    </Form.Group>

                    <ul>
                        {
                            this.state.currentItems.map((item, i)=>{
                                return <li key={i}>{item.title}</li>
                            })
                        }
                        
                    </ul>
                </Col>
            </Row>

        )
    }
}
