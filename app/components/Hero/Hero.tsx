import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE WEB3 <br/> PLATEFORM BUILD <br/> FOR YOU</h1>
        <Image
        className={styles.roundimg}
          src="/images/Group 110.png"
          width={450}
          height={450}
          alt="Picture of the author"
        />
        <Image
        className={styles.img2}
          src="/images/Ellipse 10.png"
          width={1200}
          height={1000}
          alt="Picture of the author"
        />
        <Image
        className={styles.scroll}
          src="/images/Group 84.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <Image
        className={styles.vector}
          src="/images/Group 112.png"
          width={150}
          height={250}
          alt="Picture of the author"
        />
        <Image
        className={styles.kite}
          src="/images/Vector 24.png"
          width={950}
          height={200}
          alt="Picture of the author"
        />
        <Image
        className={styles.kiteline}
          src="/images/Group 114.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <Image
        className={styles.stars}
          src="/images/Group 21.png"
          width={140}
          height={140}
          alt="Picture of the author"
        />
        <div className={styles.linkContainer}>
            <div >
            <a href='#' className={styles.links}>Sky club</a>
            </div>
            <div>
            <a href='#' className={styles.links}>Sky wallet</a>

            </div>
            <div>
            <a href='#' className={styles.links}>Contact Know</a>

            </div>
        </div>
    </div>
  )
}

export default Hero