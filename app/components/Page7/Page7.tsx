import React from 'react';
import styles from './page7.module.css';
import Image from 'next/image';

const Page7 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Organization Structure</h1>
      <div className={styles.circlesdiv}>
        <div className={styles.circle11}>
        <Image
            className={styles.textImg}
            src="/images/Group_86.png"
            width={180}
            height={180}
            alt=""
          />

        <div className={styles.circle}>
          <Image
            className={styles.structute}
            src="/images/Group_98.png"
            width={140}
            height={80}
            alt=""
          />
          <div className={`${styles.divColor} ${styles.circle1}`}>
            <h1 className={styles.h1}>60%</h1>
          </div>
        </div>
        <h1 className={styles.about}>COMMUNITY</h1>
        </div>


    <div className={styles.circle11}>
    <h1 className={`${styles.about} ${styles.about1}`}>INVESTORS</h1>

        <div className={styles.circle}>
          <Image
            className={styles.structute}
            src="/images/Group_98.png"
            width={140}
            height={80}
            alt=""
          />
          <div className={`${styles.divColor} ${styles.circle2}`}>
            <h1 className={styles.h1}>20%</h1>
          </div>
        </div>
        <Image
            className={styles.textImg1}
            src="/images/Group_116.png"
            width={300}
            height={180}
            alt=""
          />
        </div>

      <div className={styles.circle11}>
      <Image
            className={styles.textImg}
            src="/images/Group_85.png"
            width={180}
            height={180}
            alt=""
          />

        <div className={styles.circle}>
          <Image
            className={styles.structute}
            src="/images/Group_98.png"
            width={140}
            height={80}
            alt=""
          />
          <div className={`${styles.divColor} ${styles.circle3}`}>
            <h1 className={styles.h1}>20%</h1> 
          </div>
        </div>
        <h1 className={styles.about}>CORE TEAM</h1>

        </div>

      </div>
    </div>
  );
};

export default Page7;
