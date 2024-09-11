import React from "react";
import styles from "./page2.module.css";
import Image from "next/image";

const Page2 = () => {
  return (
    <div className={styles.maincontainer}>
      {/* left container */}
      <div className={styles.leftBox}>
        <Image
          className={styles.leftimg}
          src="/images/Group 106.png"
          width={150}
          height={150}
          alt=""
        />
        <h1 className={styles.titleLeft}>
          Your Everyday
          <br /> Crypto Wallet
        </h1>
        <div className={styles.gridBox}>
          <div className={styles.box1}></div>
          <div className={`${styles.box2} ${styles.bgclass}`}>
            <Image src="/images/Group_39.png" width={30} height={30} alt="" />
            <p className={styles.p}>
              Use across <br /> any app and <br /> currency{" "}
            </p>
          </div>
          <div className={`${styles.box2} ${styles.bgclass1}`}>
            <Image src="/images/ep_place.png" width={30} height={30} alt="" />
            <p className={styles.p}>
            One place for<br/> all your Web3<br/> possessions{" "}
            </p>
          </div>
          <div className={styles.box2}>
            <style></style>
            <Image
              src="/images/eos-icons_secure-data-outlined.png"
              width={30}
              height={30}
              alt=""
            />
             <p className={styles.p}>
             Simple and <br/> secure{" "}
            </p>
          </div>
          <div className={`${styles.box2} ${styles.bgclass2}`}>
            <Image
              src="/images/ic_baseline-work-outline.png"
              width={30}
              height={30}
              alt=""
            />
            <p className={styles.p}>
            Works <br/> everywhere{" "}
            </p>
          </div>
          <div className={styles.box1}></div>
        </div>
      </div>

      {/* right cotainer */}

      <div className={styles.rightBox}>
        <Image
          className={styles.leftimg}
          src="/images/Group 107.png"
          width={150}
          height={150}
          alt=""
        />
        <h1 className={styles.titleRight}>
          Exclusive, For You And Your Community
        </h1>
        <div className={styles.gridBox}>
          <div className={styles.box3}>
            <Image src="/images/Vector_198.png" width={30} height={30} alt="" />
            <p className={styles.p}>Chat, play<br/> games, and <br/> host events</p>
           
          </div>
          <div className={`${styles.box3} ${styles.bgclass}`}>
          <Image src="/images/Vector_199.png" width={30} height={30} alt="" />
            <p className={styles.p}>Create your own<br/> DAO and Tokens<br/> in 1 click</p>
           
            
          </div>
          <div className={styles.box1}></div>
          <div className={styles.box1}></div>
          <div className={styles.box3}>
            <Image
              src="/images/icon-park-outline_ticket-one.png"
              width={30}
              height={30}
              alt=""
            />
             <p className={styles.p}>Create eco-<br/>friendly NFT<br/> artwork and  tickets </p>

           
          </div>
          <div className={`${styles.box3} ${styles.bgclass}`}>
            <Image src="/images/bxs_offer.png" width={30} height={30} alt="" />
            <p className={styles.p}>Offer exclusive <br/>content and NFT<br/> memberships </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
