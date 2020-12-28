import React, { Component } from 'react';
import  './styles.css';
export default class Todo extends Component {
    state = {
        inputValue: "",
        tasks: []
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    addTask = () => {
        const inputValue = this.state.inputValue.trim();
        if(!inputValue){
            return;
        }
        const tasks = [...this.state.tasks];
        tasks.push(inputValue);
        this.setState({
            tasks: tasks,
            inputValue: ""
        })
    }

    render() {
        const { tasks } = this.state;
        const taskComponents = tasks.map((task, index) => {
            return <li key={index}>{task}</li>
        })
        return (
            <div className="toDoListMain">
                <h2 className='name'>ToDo List</h2>
                <input className="input"
                    type="text"
                    onChange={this.handleChange}
                />
                <button className="button"
                    onClick={this.addTask}
                >Add task</button>
                <ol className="List">
                    {taskComponents}
                </ol>
            </div>
        );
    }
}