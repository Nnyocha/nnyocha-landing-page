"use client";

import Image from "next/image";
import Clipboard from "../../../../public/images/clipboard.svg";
import Settings from "../../../../public/images/settings.svg";
import Support from "../../../../public/images/funding-ready.svg";
import Advise from "../../../../public/images/advise.svg";
import Connect from "../../../../public/images/connect.svg";
import Coach from "../../../../public/images/coach.svg";
import Share from "../../../../public/images/share.svg";
import Supported from "../../../../public/images/support.svg";
import styles from "./shareExpertise.module.css";

export default function ShareExpertise () {
    return(
        <section className={styles.section}>
            <div className={styles.left}>
                <h2 className={styles.title}>Share your <br /> expertise through <br />structured <br/> 
                mentorship  <br />designed to create <br />lasting impact.</h2>
                <button className={styles.mentorBtn}>Become a Mentor</button>
            </div>
            <div className={styles.right}>
                <div className={styles.detail}>
                    <Image src={Clipboard} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Review research proposals and provide constructive feedback.</p>
                </div>
                <div className={styles.detail}>
                    <Image src={Settings} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Offer technical guidance on methodology and research design.</p>
                </div>
                <div className={styles.detail}>
                    <Image src={Support} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Support researchers in becoming funding-ready.</p>
                </div>
                <div className={styles.detail}>
                    <Image src={Advise} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Advise on publication strategy and academic positioning.</p>
                </div>
                <div className={styles.detail}>
                    <Image src={Connect} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Connect researchers to relevant networks and collaborators.</p>
                </div>
                <div className={styles.detail}>
                    <Image src={Coach} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Coach presentation and communication skills.</p>
                </div>
                <div className={styles.detail}>
                    <Image src={Share} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Share industry insights and real-world application perspectives.</p>
                </div>
                <div className={styles.detail}>
                    <Image src={Supported} alt="" width={30} height={30} className={styles.detailImage} />
                    <p>Support pathways toward commercialisation where relevant.</p>
                </div>
            </div>
        </section>
    )
}