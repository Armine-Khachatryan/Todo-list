import React, {useEffect} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navMenuStyle.module.css';
import { connect } from 'react-redux';
import { logout } from '../../helpers/auth';
import {getUser} from '../../store/actions'

function NavMenu(props){
    const {isAuthenticated, getUser, user} = props;
    useEffect(() => {
        if (isAuthenticated) {
            getUser();
        }
    }, [isAuthenticated, getUser ]);


    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="container-fluid">
                <div>
                    {
                        isAuthenticated &&
                        <NavLink
                            className={styles.marg}
                            to='/'
                            activeClassName={styles.active}
                            exact
                        >
                            Home
                      </NavLink>
                    }
                    <NavLink
                        className={styles.marg}
                        to='/about'
                        activeClassName={styles.active}
                        exact
                    >
                        About us
         </NavLink>
                    <NavLink
                        className={styles.marg}
                        to='/contact'
                        activeClassName={styles.active}
                        exact
                    >
                        Contact us
        </NavLink>
                </div>
                <div>
                    {
                        isAuthenticated ?
                        <div>
                        { user ? <span className={styles.user}>  USER { user.name} { user.surname} </span> : ''}
                            <Button className={styles.logOutButton}
                                onClick={logout}  >Log out </Button> 
                                </div>:
                            <>
                                <NavLink
                                    className={styles.marg}
                                    to='/login'
                                    activeClassName={styles.active}
                                    exact
                                >
                                    Login
            </NavLink>
                                <NavLink
                                    className={styles.marg}
                                    to='/register'
                                    activeClassName={styles.active}
                                    exact
                                >
                                    Register
            </NavLink>
                            </>
                    }
                </div>
            </Nav>
        </Navbar>
    );
                }
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user:state.user
    }
};


const mapDispatchToProps = {
    getUser
}
export default connect(mapStateToProps,mapDispatchToProps)(NavMenu);