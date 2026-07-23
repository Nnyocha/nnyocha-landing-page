"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from '../../../../public/images/Logo.svg'
import styles from "./navbar.module.css";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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
              rel="noreferrer noopener"
            >
              Blog
            </Link>
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
            rel="noreferrer noopener"
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}