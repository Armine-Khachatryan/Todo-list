import React from 'react';
import { Navbar, Nav,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navMenuStyle.module.css';
import {connect} from 'react-redux';
import {logout} from '../../heplers/auth'

 function NavMenu({ isAuthenticated }){

    return (
        <Navbar bg="dark" variant="dark">
            <Nav >
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
        {
            isAuthenticated ? 
            <Button 
            onClick={logout}>Log out </Button> :
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
            </Nav>
        </Navbar>
    );
};
const mapStateToProps = (state)=>{
    return {
      isAuthenticated: state.isAuthenticated
    }
    };
    
    export default connect(mapStateToProps)(NavMenu);