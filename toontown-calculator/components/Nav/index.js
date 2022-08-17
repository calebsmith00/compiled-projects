import styles from './Nav.module.scss'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/calculator"><a>Calculator</a></Link>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Home</a></Link>
        </div>
    )
}