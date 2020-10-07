import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './planner.css'


function Item(props) {

    return (
        
        <Row className="mb-2">
            <Col className='day-item'>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
            </Col>
        </Row>
    )
}



function Day(props) {

    return (
        <Col md={2} className="day">
            <h4 className='mb-3'>{props.name}</h4>

            {
                props.items.map((item, i) => {
                    return <Item item={item} key={i}></Item>
                })
            }


        </Col>
    )
}

export default function Planner(props) {
    return (
        <Row className="justify-content-around mt-5">
            <Day name='Monday' items={props.planner.mon}></Day>
            <Day name='Tuesday' items={props.planner.tue}></Day>
            <Day name='Wednesday' items={props.planner.wed}></Day>
            <Day name='Thuesday' items={props.planner.thu}></Day>
            <Day name='Friday' items={props.planner.fri}></Day>
        </Row>
    )
}


