import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';



export default class Stats extends React.Component {

    state = {
        priorityCount: 0,
        dayAverage: 0,
        weekFirstPart: 0
    }

    // highPriorityCount = (priority) => {
    //     const one = this.props.statsInfo[priority];

    //     let count = 0;

    //     if (one === "high") {
    //         count += 1;
    //     }

    //     this.setState({
    //         priorityCount: count
    //     })
    // }

    highPriorityCount = () => {
        let days = ['mon', 'tue', 'wed', 'thu', 'fri'];
        let count = 0;

        for (let day of days) {
            for (let info of this.props.statsInfo[day]) {
                if (info.priority === '3') {
                    count += 1;
                }
            }
        }
        return count;
    }

    countDayAvg = () => {
        let days = ['mon', 'tue', 'wed', 'thu', 'fri'];
        let countLength = 0;

        for (let day of days) {
            countLength += this.props.statsInfo[day].length

        }
        return countLength / 5
    }

    firstPartOfTheWeekCount = () => {
        let days = ['mon', 'tue', 'wed'];
        let count = 0;

        for(let key of days) {
            count += this.props.statsInfo[key].length
        }
        return count;
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

                                <td>{this.highPriorityCount()}</td>


                                <td>{this.countDayAvg()}</td>
                                <td>{this.firstPartOfTheWeekCount()}</td>

                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}