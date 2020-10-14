import React from 'react';
import DayWidget from './components/DayWidget';
import AddItemFForm from "./components/Form"
import ItemsTable from './components/itemsTable';
import Planner from './components/planner';
import Stats from './components/Stats';

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

    removeTodo = (name) => {
    this.setState({
        planner: this.state.planner.filter(el => el !== name)
    })
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
                <Planner planner={this.state.planner}> </Planner>
                <ItemsTable planner={this.state.planner}></ItemsTable>
                <DayWidget days={this.state.planner}></DayWidget>
                <Stats statsInfo={this.state.planner}></Stats>
            </div>
        )
    }
}