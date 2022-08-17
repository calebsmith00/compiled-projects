import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import React from 'react'
import styles from './Layout.module.css'
import { Pane } from 'evergreen-ui'

class Layout extends React.Component {

    render() {
        return (
            <Pane className={styles.layout}>
                {/* NAVBAR */}
                 <Navbar />
                
                {/* BODY */}
                {this.props.children}
                
                {/* FOOTER */}
                <Footer />
            </Pane>
        )
    }

}

export default Layout;