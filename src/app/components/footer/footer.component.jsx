"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/Logo.svg";
import Instagram from "../../../../public/images/instagram.svg";
import Twitter from "../../../../public/images/twitter.svg";
import LinkedIn from "../../../../public/images/linkedin.svg";
import styles from "./footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <Image src={Logo} alt="Nyocha logo" className={styles.logo} />
            <address className={styles.address}>
              66 Wellington Street West, Suite 4100 Toronto, ON M5K 1B7
            </address>
            <div className={styles.socialLinks}>
              <Link 
                href="https://www.instagram.com/nnyocha_hub"
                target="_blank"
                rel="noreferrer noopener">
                  <Image src={Instagram} alt="Instagram" className={styles.socialIcon} />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/nnyocha/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image src={LinkedIn} alt="LinkedIn" className={styles.socialIcon} />
              </Link>
              <Link 
                href="https://x.com/nnyocha_hub"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image src={Twitter} alt="Twitter" className={styles.socialIcon} />
              </Link>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.navGroup}>
              <Link 
                href="/" 
                className={styles.navLink}
              >
                Home
              </Link>
              <a 
                href="/about" 
                className={styles.navLink}
              >
                About
              </a>
              <a
                href ="https://substack.com/@nnyocha"
                className={styles.navLink}
                target="_blank">
                Blog
              </a>
            </div>
            <div className={styles.navGroup}>
              <a 
                href="/funders" 
                className={styles.navLink}
              >
                Funders
              </a>
              <a 
                href="/mentors" 
                className={styles.navLink}
              >
                Mentors
              </a>
              <a 
                href="/researchers" 
                className={styles.navLink}
              >
                Researchers
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            Copyright {year} | Nnyocha | All rights reserved.
          </span>
          <div className={styles.legalLinks}>
            <a href="#privacy" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="#terms" className={styles.legalLink}>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}