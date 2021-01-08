import React, { Component } from 'react';
import  './styles.css';
import {Container, Row, Col, Button, FormControl} from 'react-bootstrap';
export default class Todo extends Component {
    state = {
        inputValue:{title:""},
        tasks: []
    }

    handleChange = (event) => {
        this.setState({
            inputValue:{title: event.target.value}
        })
    }

    addTask = () => {
        const inputValue= this.state.inputValue.title.trim();
        if(!inputValue){
            return;
        }
        const tasks = [...this.state.tasks];
        tasks.push(inputValue);
        this.setState({
            tasks: tasks,
            inputValue:{title:""}
        })
    }

    render() {
        const { tasks } = this.state;
        const taskComponents = tasks.map((task, index) => {
            return (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
            <div className="task">{task}</div>
            </Col>)
            });
            
        return(
            <Container>
            <Row>
            <Col>
            <h2 className='name'>ToDo List</h2>
            </Col>
            </Row>
            <Row>
            <Col
            xs={2}>
            <FormControl type="text" className="input"
            value={this.state.inputValue.title}
             onChange={this.handleChange}/>
            </Col>
            <Col>
            <Button variant="danger" onClick={this.addTask}>Add task</Button>
            </Col>
            </Row>
<Row>
{taskComponents}
</Row>   
</Container>
        );
    }
}