import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'

class Navbar extends React.Component {
    render() {
        return (
            <div className={styles.navbar}>
                {/* Logo */}
                <h1 className={styles.navbarLogo}>Navbar</h1>

                {/* Links */}
                <div className={styles.navbarLinks}>
                    <Link className={styles.navbarLink} href="/about"><a className={styles.navbarLink}>About Me</a></Link>
                    <Link className={styles.navbarLink} href="/contact"><a className={styles.navbarLink}>Contact Me</a></Link>
                    <Link className={styles.navbarLink} href="/github"><a className={styles.navbarLink}>GitHub</a></Link>
                </div>
            </div>
        )
    }
}

export default Navbar;