import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Image
          src="/images/Group117.png"
          width={140}
          height={140}
          alt="Picture of the author"
        />
      </div>
      <div className={styles.socialLinks}>
      <Image src="/images/akar-icons_discord-fill.png" width={20} height={20} alt="" />
      <Image src="/images/akar-icons_twitter-fill.png" width={20} height={20} alt="" />
      <Image src="/images/ant-design_instagram-filled.png" width={20} height={20} alt="" />

      </div>
    </div>
  );
};

export default Header;
