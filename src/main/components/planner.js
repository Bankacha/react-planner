import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import './planner.css'


function Day(props) {
    return (
        <Col md={2} className="day">
            <h3 className='mb-3'>{props.name}</h3>
            {
                props.items.map((item, i) => (
                    <Row key={i} className={`justify-content-between mb-2 pt-3 day-item ${item.completed ? 'completed' : ''}`}>
                        <Col md={3}>
                            <p className="mb-1">{item.title}</p>
                        </Col>
                        <Col md={3}>
                            <Form.Group >
                                <Form.Check onChange={(e) => props.onComplete(props.dayKey, e.target.checked, i)} value={item.completed} type="checkbox" />
                            </Form.Group>
                        </Col>
                    </Row>
                ))
            }
        </Col>
    )
}

export default function Planner(props) {
    return (
        <Row className="justify-content-around mt-5">
            <Day onComplete={props.onComplete} dayKey="mon" name="Monday" items={props.planner.mon}></Day>
            <Day onComplete={props.onComplete} dayKey="tue" name="Tuesday" items={props.planner.tue}></Day>
            <Day onComplete={props.onComplete} dayKey="wed" name="Wednesday" items={props.planner.wed}></Day>
            <Day onComplete={props.onComplete} dayKey="thu" name="Thursday" items={props.planner.thu}></Day>
            <Day onComplete={props.onComplete} dayKey="fri" name="Friday" items={props.planner.fri}></Day>
        </Row>
    )
}