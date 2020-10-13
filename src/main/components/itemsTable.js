import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';


export default class ItemsTable extends React.Component {

    getPriorityName = (priority) => {
        const map = {
            "1": "low",
            "2": "medium",
            "3": "high"
        }

        return map[priority]
    }

    getAllDays = () => {
        let dayKey = ['mon', 'tue', 'wed', 'thu', 'fri'];
        let daysArr =[];
        
        for(let day of dayKey) {
            for(let one of this.props.planner[day]) {
                daysArr.push(one)
            }
        }

        return daysArr;
    }

    render() {

        console.log(this.getAllDays())

        return (
            <Row className="mt-5">
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Priority</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Day</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.getAllDays().map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{this.getPriorityName(item.priority)}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.day}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>

        )
    }
}