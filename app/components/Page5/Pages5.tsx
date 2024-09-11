import React from 'react';
import styles from './page5.module.css';
import Image from 'next/image';

const Pages5 = () => {
  return (
    <div className={styles.container}>
      {/* Title and Arrow */}
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <h1 className={styles.title}>The Metasky Team</h1>

        {/* Arrow next to title */}
        <div className={styles.arrowwrapper}>
          <Image
            className={styles.arrow}
            src="/images/Arrow 4.png"
            width={30}
            height={30}
            alt="Arrow Next"
          />
        </div>
      </div>

      {/* Layer Wrapper */}
      <div className={styles.layerwrapper}>
        {/* Bottom Layer (vector2) */}
        <Image
          className={styles.vector2}
          src="/images/Rectangle 101.png"
          layout="fill"
          alt="Rectangle Background"
        />

        {/* Middle Layer (vector1) */}
        <Image
          className={styles.vector1}
          src="/images/Group 135.png"
          layout="fill"
          alt="Graph Overlay"
        />

        {/* Top Layer (Team Members) */}
        <div className={styles.grid}>
          <div className={styles.member1}>
            <Image
              src="/images/Group 130.png"
              width={150}
              height={150}
              alt="Ankit Arora"
            />
            
          </div>

          <div className={styles.member2}>
            <Image
              src="/images/Group 131.png"
              width={150}
              height={150}
              alt="Ankit Arora"
            />
            
          </div>

          <div className={styles.member3}>
            <Image
              src="/images/Group 132.png"
              width={150}
              height={150}
              alt="Ankit Arora"
            />
           
          </div>

          <div className={styles.member4}>
            <Image
              src="/images/Group 132.png"
              width={150}
              height={150}
              alt="Ankit Arora"
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages5;
