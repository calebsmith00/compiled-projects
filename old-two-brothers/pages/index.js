import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import { Pane } from 'evergreen-ui'
import background from '../public/background.jpeg'

const aboutText = `Two Brothers Lawn Care is a family owned and operated business with deep roots in the community. We started 12 years ago with two mowers and a dedication to customer service. Our goal is to treat you like part of the family and to care for your lawn like it was our own. Our mission is simple: To always offer excellent service at a fair price.`

export default function Home() {
  return (
    <Layout>
      {/* THE FOLD P1. Background image */}
      <Pane className={styles.backgroundContainer}>
        <Image src={background} className={styles.background} alt="We mow grass" layout="fill" />

        {/* THE FOLD P2. Main header. */}
        <Pane className={styles.pageFold}>
          <h1 className={styles.removeOpaqueText}>Get the best of the best with Two Brothers Lawn Care</h1>
          <p className={styles.removeOpaqueText}>Call or email now for a fast, free, and friendly quote</p>
        </Pane>
      </Pane>
      


      <Pane className={styles.belowFold}>
        {/* About the company */}
        <Pane className={styles.about}>
          <h1>What we are about</h1>
          <p>{aboutText}</p>
        </Pane>

        {/* Services offered for clients */}
        <Pane className={styles.services}>
          <h1>Our Services</h1>
          <p>Things things things</p>
        </Pane>

        {/* Contact form / Quote */}
        <Pane className={styles.requestQuote}>
          <h1>Request a Quote</h1>
          <p>Things things things</p>
        </Pane>

        {/* Testimonials */}
        <Pane className={styles.testimonials}>
          <h1>Testimonials</h1>
          <p>Things things things</p>
        </Pane>
      </Pane>
    </Layout>
  )
}
