import React from 'react';
import styles from './Navbar.module.css'
import { Pane } from 'evergreen-ui'

class Navbar extends React.Component { 
    render() {
        return (
            <Pane className={styles.navbar}>
                {/* LOGO */}
                <h1>Two Brothers Lawn Care</h1>

                {/* LINKS */}
                <Pane className={styles.links}>
                    <h3 className={styles.link}>Home</h3>
                    <h3 className={styles.link}>Thing1</h3>
                    <h3 className={styles.link}>Thing2</h3>
                    <h3 className={styles.link}>Thing3</h3>
                </Pane>
            </Pane>
        )
    }
}

export default Navbar;