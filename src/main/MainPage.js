import React from 'react';
import AddItemFForm from "./components/Form"
import Planner from './components/planner';

export default class MainPage extends React.Component {
    state = {
        planner: {
            mon:[],
            tue:[],
            wed:[],
            thu:[],
            fri:[]
        }
    }

    addItemToDay = (newItem) => {
        const plannerCopy = {...this.state.planner};
        plannerCopy[newItem.day].push(newItem)

        console.log(newItem)

        this.setState({
            planner: plannerCopy
        })
    }

    render() {
        return (
            <div>
                <AddItemFForm onAdd={this.addItemToDay}></AddItemFForm>
                <Planner planner={this.state.planner}></Planner>
            </div>
        )
    }
}