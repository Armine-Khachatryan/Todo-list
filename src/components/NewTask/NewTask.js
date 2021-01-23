import React, { Component } from 'react';
import {Button, FormControl, InputGroup } from 'react-bootstrap';
import idGenerator from '../../heplers/idGenerator';
import styles from './newTaskStyle.module.css';

class NewTask extends Component{ 
state={
    title:" ",
    description:" " 
}

handleChange=(event)=>{
    this.setState({
        title:event.target.value
    });
};


handleKeyDown=(event)=> {
    if(event.key==="Enter"){
        this.handleSubmit();
    }
};

handleSubmit = ()=>{
    const title = this.state.title.trim();
    const description = this.state.description.trim();

    if (!title) {
        return;
    }

    const newTask = {
        _id: idGenerator(),
        title,
        description
    };

    this.props.onAdd(newTask);
    this.setState({
        title: '',
        description: ''
    });
};



render(){
    const{title,description}=this.state;
    const { disabled} = this.props;
return(
    <InputGroup className="mb-3">
        <FormControl
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            onKeyDown = {this.handleKeyDown}
            disabled={disabled}
        />
        <InputGroup.Append>
            <Button
                variant="outline-primary"
                onClick={this.handleSubmit}
                disabled={disabled}
            >
                Add
            </Button>
        </InputGroup.Append>
    </InputGroup>
)
}
}
export default NewTask;
