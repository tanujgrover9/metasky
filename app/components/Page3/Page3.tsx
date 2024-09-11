import React from 'react'
import styles from './page3.module.css'
import Image from 'next/image'

const Page3 = () => {
  return (
    <div className={styles.container}>
        <Image
        className={styles.img}
          src="/images/Mask Group_3.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
        <Image
        className={styles.vector1}
          src="/images/Vector 48.png"
          width={150}
          height={150}
          alt="Picture of the author"
        />
        <Image
        className={styles.vector2}
          src="/images/Vector 45.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className={styles.titlediv}>
            <h1 className={styles.title}>TANUKIBLES</h1>
            <h2 className={styles.title2}>PLAY 2 EARN GAME</h2>
            <h3 className={styles.title3}>9999 Tanuki NFTs up for grabs</h3>
            <button className={styles.btn}>Learn More</button>
        </div>
    </div>
  )
}

export default Page3