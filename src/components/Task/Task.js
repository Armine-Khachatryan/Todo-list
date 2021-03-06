import React, { PureComponent } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './taskStyle.module.css';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { formatDate, textTruncate } from '../../heplers/utils';
import {Link} from 'react-router-dom';

class Task extends PureComponent {

    handleChange = () => {
        const { data, onToggle } = this.props;
        onToggle(data._id);
    }

    render() {
        const task = this.props.data;
        const { disabled, onDelete, selected, onEdit } = this.props;


        return (
            <div className={styles.allCards}>
            <Card style={{height: "(100% - 20px"}} className={`${styles.task} ${selected ? styles.selected : " "}`}>

                <Card.Body>
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        checked={this.props.selected} />
                        <Link to={`/task/${task._id}`}>
                    <Card.Title>{textTruncate(task.title,25)}</Card.Title>
                    </Link>
                    <Card.Text>
                        Description: {textTruncate(task.description,60)}
                    </Card.Text>
                    <Card.Text>
                        Date: {formatDate(task.date)}
                    </Card.Text>
                    <Button
                        className='m-1'
                        variant="warning"
                        disabled={disabled}
                        onClick={() => onEdit(task)}

                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className='m-1'
                        variant="danger"
                        disabled={disabled}
                        onClick={() => onDelete(task._id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Card.Body>
            </Card>
            </div>
        )
    }
}
Task.propTypes = {
    data: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};

export default Task;