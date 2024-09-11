import React from 'react'
import styles from './page4.module.css'
import Image from 'next/image'


const Page4 = () => {
  return (
    <div className={styles.container} >
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>Communities are the <br/> lifeblood of society.</h1>
        <p className={styles.para}>Decentralised communities are going to be the lifeblood of the metaverse.
        </p>
        <br/>
        <p>Metasky aims to empower influencers,<br/> creators and brands to build happy,<br/> motivated Web3 communities with a strong sense of belongingness.</p>
        </div>
        <Image
        className={styles.web}
          src="/images/WEB3.png"
          width={440}
          height={440}
          alt="Picture of the author"
        />
       
    </div>
  )
}

export default Page4