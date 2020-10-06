import React from 'react';
import AddItemFForm from "./components/Form"
import Planner from './components/planner';

export default class MainPage extends React.Component {
    state = {
        planner: {
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: []
        }
    }

    addItemToDay = (newItem) => {
        if (newItem.day !== 'default') {
            const planner = { ...this.state.planner, [newItem.day]: this.state.planner[newItem.day].concat(newItem) }
            this.setState({ planner });
        }
    }

    completeItem = (dayKey, checked, idx) => {
        const planner = { ...this.state.planner }
        planner[dayKey][idx].completed = checked;
        this.setState({ planner })
    }

    render() {
        return (
            <div>
                <AddItemFForm onAdd={this.addItemToDay}></AddItemFForm>
                <Planner onComplete={this.completeItem} planner={this.state.planner}></Planner>
            </div>
        )
    }
}