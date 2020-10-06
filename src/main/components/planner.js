import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './planner.css'


function Day() {
    return (
        <Col md={2} className="day">
            <h1 className='mb-3'>Monday</h1>
            <Row className="mb-2">
                <Col className='day-item'>
                    <h3>Item</h3>
                    <p>Description</p>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col className='day-item'>
                    <h3>Item</h3>
                    <p>Description</p>
                </Col>
            </Row>
        </Col>
    )
}

export default function Planner() {
    return (
        <Row className="justify-content-around mt-5">
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
        </Row>
    )
}