import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask'

export default class Todo extends Component {
    state = {
        tasks: [],
        selectedTasks:new Set()
    };


    addTask = (newTask) => {
    
        const tasks = [...this.state.tasks, newTask];


        this.setState({
            tasks
        });
    };

    deleteTask = (taskId) => {
        const newTasks = this.state.tasks.filter((task) => taskId !== task._id);

        this.setState({
            tasks: newTasks
        });
    };

    toggleTask=(taskId) => {
        const selectedTasks=new Set(this.state.selectedTasks)
        if (selectedTasks.has(taskId)){
            selectedTasks.delete(taskId);
        }
        else {
            selectedTasks.add(taskId);
        }
        this.setState({
            selectedTasks
        });
    };

    removeSelected=()=> {
        const{tasks,selectedTasks}=this.state;
        const newTasks=tasks.filter((task)=>{
            if(selectedTasks.has(task._id)) {
                return false;
            }
            return true;
            });
     this.setState({
         tasks:newTasks,
         selectedTasks:new Set()
     });
    };

   

    render() {
        const { tasks, selectedTasks } = this.state;

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
                <Task data={task}
                onToggle={this.toggleTask}
                disabled={!!selectedTasks.size}
                onDelete={this.deleteTask}
                />
                </Col>
            )
        });

        return (
            <div>
                <h2>ToDo List</h2>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={10}>
                        <NewTask
                        disabled = {!!selectedTasks.size}
                        onAdd = {this.addTask}
                        />
                        </Col>
                    </Row>
                    <Row>
                        <Button
                            variant="danger"
                            onClick={this.removeSelected}
                            disabled={!selectedTasks.size}
                        >
                            Delete selected
                        </Button>

                    </Row>
                    <Row className="justify-content-center">
                        {taskComponents}
                    </Row>
                </Container>
            </div>
        );
    }
}
