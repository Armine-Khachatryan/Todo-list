import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './about.module.css';


export default function About() {

    return (
        <Container className={styles.style}>
            <div className={styles.divStyle}>
                <h1 className={styles.heading}>About us </h1>
                <p className={styles.myStyle}>
                    Welcome to this website! I wanted to offer a platform that would help you organize your tasks. This ToDo List will shape your day and help you focus on the things that are most important to you, so it will keep you happy and productive. I keep it simple, so users can focus on creating an amazing ToDo List and best of all - it's free.
                    Here's what you need to know to make your ToDo List.
        </p>
                <p className={styles.myStyle}>
                    1.	You can create a new task with “Add new task” button and your task should have a title, description  and a status.
        </p>
                <p className={styles.myStyle}>
                    2.	You can edit and delete the task with “Edit task” and “Delete task” buttons.
        </p>
                <p className={styles.myStyle}>
                    3.	You can sort the tasks by status, A-Z and Z-A, creation date and completion date pressing “search” button. Sorting and grouping tools will help you see what's what and quickly make sense of the information.
        </p>
                <p className={styles.myStyle}>
                    4.	By pressing the title of the task you will move to the single task page and can deal with only this task.
        </p>
                <p className={styles.myStyle}>
                    You can also contact us by filling the form in the Contact page.
        </p>
                <p className={styles.myStyle}>
                    The website is created by Armine Khachatryan and it is my first big work I am a financial analyst. I have worked at Deloitte Audit Analytics for about 3 years and have five and a half years of working experience at a banking system. I have studied JavaScript and React.Js with Bitschool and now I want to try myself in this area and eager to contribute my competencies and experiences with you.
        </p>
            </div>
        </Container>
    );
};