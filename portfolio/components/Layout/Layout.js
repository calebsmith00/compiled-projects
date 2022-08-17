import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.scss'

class Layout extends React.Component {
    render() {
        return (
            <div className={styles.layout}>
                <Navbar />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;