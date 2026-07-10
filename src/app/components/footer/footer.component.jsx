"use client";

import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import Instagram from "../../../../public/images/instagram.svg";
import Twitter from "../../../../public/images/twitter.svg";
import LinkedIn from "../../../../public/images/linkedin.svg";
import styles from "./footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

  const handleNavClick = (e, targetId, tab) => {
    e.preventDefault();
    
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.setItem('selectedRole', tab);
        window.dispatchEvent(new CustomEvent('roleChange', { detail: tab }));
      }
    } else {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
              <Image src={Instagram} alt="Instagram" className={styles.socialIcon} />
              <Image src={LinkedIn} alt="LinkedIn" className={styles.socialIcon} />
              <Image src={Twitter} alt="Twitter" className={styles.socialIcon} />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.navGroup}>
              <a 
                href="#top" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, 'top')}
              >
                Home
              </a>
              <a 
                href="#funders" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, 'funders')}
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
                href="#waiting-list" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, 'waiting-list', 'Funder')}
              >
                Funders
              </a>
              <a 
                href="#waiting-list" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, 'waiting-list', 'Mentor')}
              >
                Mentors
              </a>
              <a 
                href="#waiting-list" 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, 'waiting-list', 'Researcher')}
              >
                Researchers
              </a>
            </div>
          </div>
        </div>

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