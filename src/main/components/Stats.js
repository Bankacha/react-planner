import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';


export default class Stats extends React.Component {

    state = {
        priorityCount: 0,
        dayAverage: 0,
        weekFirstPart: 0
    }

    highPriorityCount = (priority) => {
        const one = this.props.statsInfo[priority];

        let count = 0;

        if (one === "high") {
            count += 1;
        }

        this.setState({
            priorityCount: count
        })
    }

    countDayAvg = (item) => {
        let count = 0;

        if (this.props.statsInfo[item]) {
            count += 1
        }
        let avg = count / 5;

        this.setState({
            dayAverage: avg
        })
    }

    render() {
        return (
            <Row className="mt-5">
                <Col>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>High Priority Count</th>
                                <th>Day Average</th>
                                <th>First Part of The Week</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >

                                <td>{this.state.priorityCount}</td>


                                <td>{this.state.dayAverage}</td>
                                <td></td>

                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}