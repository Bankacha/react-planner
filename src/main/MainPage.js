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
        this.state.planner[newItem.day].push(newItem)
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