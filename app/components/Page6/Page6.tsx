import React from 'react';
import styles from './page6.module.css'
import Image from 'next/image';

const Page6 = () => {
  return (
    <div className={styles.container}>
        <div >
        <Image
        className={styles.img2}
              src="/images/Group_88.png"
              width={550}
              height={550}
              alt=""
            />
        <Image
        className={styles.img1}
              src="/images/Group 118.png"
              width={1250}
              height={550}
              alt=""
            />
            <div className={styles.buttons}>
                <button className={styles.btn1}>JOIN THE TEAM</button>
                <button className={styles.btn2}>BUSINESS INQUIRIES</button>
                 
            </div>
            <div className={styles.overlaytext}>
                <p>COMING SOON  COMING SOON  COMING SOON COMING SOON COMING SOON  COMING SOON  COMING SOON COMING SOON COMING SOON  COMING SOON COMING SOON</p>
            </div>
        <Image
        className={styles.img}
              src="/images/Group 116.png"
              width={570}
              height={530}
              alt=""
            />
        </div>

    </div>
  )
}

export default Page6