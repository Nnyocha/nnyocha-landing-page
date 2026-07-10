"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from '../../../../public/images/Logo.svg'
import styles from "./navbar.module.css";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleTabClick = (e, tab) => {
    e.preventDefault();
    const section = document.getElementById('waiting-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      sessionStorage.setItem('selectedRole', tab);
      window.dispatchEvent(new CustomEvent('roleChange', { detail: tab }));
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <Link href="/">
             <Image src={Logo} alt="the Nnyocha logo" className={styles.logoImage} width={120} height={100}/>
            </Link>
          </div>

          <div className={styles.desktopNav}>
            <Link 
              href="/funders"
              className={styles.navLink}
            >
              Funders
            </Link>
            <Link 
              href="/researchers"
              className={styles.navLink}
            >
              Researchers
            </Link>
            <Link 
              href="/mentors"
              className={styles.navLink}
            >
              Mentors
            </Link>
            <Link 
              href="/about"
              className={styles.navLink}
            >
              About
            </Link>
            <Link 
              href="https://substack.com/@nnyocha"
              className={styles.navLink}
              target="_blank"
            >
              Blog
            </Link>
            <button 
              className={styles.waitlistBtn}
              onClick={(e) => handleTabClick(e, 'Researcher')}
            >
              Join Waitlist
            </button>
            <button 
              href="#waiting-list" 
              className={styles.registerBtn}
              onClick={(e) => handleTabClick(e, 'Funder')}
            >
              Book a call
            </button>
          </div>

          <div className={styles.mobileMenuBtn}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <span className={styles.closeIcon}>✕</span>
              ) : (
                <span className={styles.hamburgerIcon}>☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          <Link 
            href="/funders"
            className={styles.navLink}
          >
            Funders
          </Link>
          <Link 
            href="/researchers"
            className={styles.navLink}
          >
            Researchers
          </Link>
          <Link 
            href="/mentors"
            className={styles.navLink}
          >
            Mentors
          </Link>
          <Link 
            href="/about"
            className={styles.navLink}
          >
            About
          </Link>
          <Link 
            href="https://substack.com/@nnyocha"
            className={styles.navLink}
            target="_blank"
          >
            Blog
          </Link>
          <button 
            className={styles.waitlistBtn}
            onClick={(e) => handleTabClick(e, 'Researcher')}
          >
            Join Waitlist
          </button>
          <button
            className={styles.mobileRegisterBtn}
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleTabClick(e, 'Researcher');
            }}
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}