import styles from './Project.module.scss'


export default function Project({ title, content }) {
    return (
        <div className={styles.project}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}