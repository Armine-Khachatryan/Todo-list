import React, { Component } from 'react';
import  styles from'./todo.module.css';
import { Container, Row, Col, Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import idGenerator from '../../heplers/idGenerator';

export default class Todo extends Component {
    state = {
        inputValue: '',
        tasks: [],
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    addTask = () => {
        const inputValue = this.state.inputValue.trim();

        if (!inputValue) {
            return;
        }

        const newTask = {
            _id: idGenerator(),
            title: inputValue
        };


        const tasks = [...this.state.tasks, newTask];


        this.setState({
            tasks,
            inputValue: ''
        });
    };

    deleteTask = (taskId) => {
        const newTasks = this.state.tasks.filter((task) => taskId !== task._id);

        this.setState({
            tasks: newTasks
        });
    };

    render() {
        const { tasks, inputValue } = this.state;

        const taskComponents = tasks.map((task) => {

            return (
                <Col
                    key={task._id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <Card className={styles.task}>

                        <Card.Body>
                            <Card.Title>{task.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and
                  </Card.Text>
                            <Button
                                variant="danger"
                                onClick={() => this.deleteTask(task._id)}
                            >
                                Delete
                  </Button>
                        </Card.Body>
                    </Card>


                </Col>
            )
        });

        return (
            <div>
                <h2>ToDo List</h2>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={10}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Input your task"
                                    value={this.state.inputValue}
                                    onChange={this.handleChange}
                                />
                                <InputGroup.Append>
                                    <Button
                                        variant="outline-primary"
                                        onClick={this.addTask}
                                    >
                                        Add
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {taskComponents}
                    </Row>
                </Container>
            </div>
        );
    }
}
