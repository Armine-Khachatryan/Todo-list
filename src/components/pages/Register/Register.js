import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './registerStyle.module.css';
import { connect } from 'react-redux';
import { register } from '../../../store/actions';


function Register(props) {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        name: null,
        surname: null,
        email: null,
        password: null,
        confirmPassword: null
    });

    const handleChange = ({ target: { name, value } }) => {
        setValues({
            ...values,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: null
        });

        if (name === 'email' && value) {
            const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailReg.test(value)) {
                setErrors({
                    ...errors,
                    email: 'Invalid email'
                });
            }
        }
    };


    const handleSubmit = () => {
        const { name, surname, email, password, confirmPassword } = values;
        let valid = true;
        let passwordMessage=null;
        let confirmPasswordMessage = null;
        if (password.length < 7) {
            passwordMessage = "Password should be more than 6 characters";
            valid = false;
        }

        if(!password){
            passwordMessage="Password is required"
        }


        if (!confirmPassword) {
            confirmPasswordMessage = "Password is required";
            valid = false;
        }


        else if (password !== confirmPassword) {
            confirmPasswordMessage = "Passwords don't match";
            valid = false;
        }


        setErrors({
            name: name ? null : "Name is required",
            surname: surname ? null : "Surname is required",
            email: email ? null : "Email is required",
            confirmPassword: confirmPasswordMessage,
            password: passwordMessage
        });

        if (valid) {
            props.register(values);
        }
    };


    return (

        <div className={styles.style}>
            <Container >
                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6}>
                        <Form>
                            <h3 className={styles.registerTitle}>Register</h3>
                            <Form.Group>
                                <Form.Control
                                    className={errors.name ? styles.invalid : ''}
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                {
                                    <Form.Text className="text-danger" >
                                        {errors.name}
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    className={errors.surname ? styles.invalid : ''}
                                    type="text"
                                    name="surname"
                                    placeholder="Enter your surname"
                                    value={values.surname}
                                    onChange={handleChange}
                                />
                                {
                                    <Form.Text className="text-danger" >
                                        {errors.surname}
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    className={errors.email ? styles.invalid : ''}
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {
                                    <Form.Text className="text-danger" >
                                        {errors.email}
                                    </Form.Text>
                                }

                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    className={errors.password ? styles.invalid : ''}
                                    type="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    name="password"
                                />
                                {
                                    <Form.Text className="text-danger">
                                        {errors.password}
                                    </Form.Text>
                                }

                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    className={errors.confirmPassword ? styles.invalid : ''}
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    name="confirmPassword"
                                />
                                <Form.Text className="text-danger">
                                    {errors.confirmPassword}
                                </Form.Text>
                            </Form.Group>

                            <div>
                                <Button
                                    variant="danger"
                                    onClick={handleSubmit}
                                >
                                    Register
    </Button>
                            </div>

                            <Link to='/login' className={styles.linkStyle}> Already registered? Try to login.</Link>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const mapDispatchToProps = {
    register
}

export default connect(null, mapDispatchToProps)(Register);

