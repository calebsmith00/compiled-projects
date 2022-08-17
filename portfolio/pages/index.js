import Layout from '../components/Layout/Layout'
import Projects from '../components/Projects/Projects'

import Image from 'next/image'
import Link from 'next/link'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import background from '../public/programmer-stock.png'
import photoOfMe from '../public/MeOnWeddingDay.JPG'

import styles from '../styles/Home.module.scss'

export default function Portfolio() {
  return (
    <Layout>
      {/* Background image */}
      <div className={styles.background}>
        <div className={styles.addDarkLayer}></div>
        <Image layout="fill" src={background} alt="Photo of person coding" />
      </div>

      {/* Introduction */}
      <div className={styles.introduction}>
        <h1>Hello! My name is Caleb</h1>

        <div className={styles.biography}>
          {/* Image of me */}
          <div className={styles.photoOfMe}>
            <Image src={photoOfMe} alt="The author, Caleb" />
          </div>

          {/* My biography */}
          <div className={styles.biographyParagraphs}>
            <p>I have been passionate about technology and development since I was 7-years-old. I started out with very basic HTML projects, and have since taken many online courses as well as contributing to various projects to help further my education.</p>
            <p>I plan on enrolling in school Spring 2022 to gain my bachelor of computer science</p>
          </div>
        </div>

        {/* Pointer to projects */}
        <div className={styles.showProjects}>
          <p>Click to explore projects</p>
          <a href="#projects"><FontAwesomeIcon icon={faArrowDown} /></a>
        </div>
      </div>

      {/* Projects */}
      <Projects />
    </Layout>
  )
}
