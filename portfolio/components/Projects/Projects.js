import Project from './Project'
import styles from './Projects.module.scss'

export default function Projects() {
    return (
        <div className={styles.projects} id="projects">
            <Project title={"Sample project 1"} content={"No"} />
            <Project title={"Sample project 2"} content={"Maybe"} />
            <Project title={"Sample project 3"} content={"Yes"} />
        </div>
    )
}