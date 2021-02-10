import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navMenuStyle.module.css';

export default function NavMenu() {

    return (
        <Navbar  bg="dark" variant="dark">
            <Nav >
                <NavLink
                    className={styles.marg}
                    to='/'
                    activeClassName={styles.active}
                    exact
                >
                    Home
        </NavLink>
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
            </Nav>
        </Navbar>
    );
};