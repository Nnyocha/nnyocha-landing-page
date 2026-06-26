"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from '../../../../public/images/Logo.svg'
import styles from "./navbar.module.css";

const navLinks = [
  { label: "Funders", href: "#waiting-list", tab: "Funder" },
  { label: "Researcher", href: "#waiting-list", tab: "Researcher" },
  { label: "Mentors", href: "#waiting-list", tab: "Mentor" },
  { label: "Contact", href: "#waiting-list" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, tab) => {
    if (tab) {
      e.preventDefault();
      const section = document.getElementById('waiting-list');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.setItem('selectedRole', tab);
        window.dispatchEvent(new CustomEvent('roleChange', { detail: tab }));
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <Link href="/">
             <Image src={Logo} alt="the Nnyocha logo" className={styles.logo} width={120} height={100}/>
            </Link>
          </div>

          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.tab)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="#waiting-list" 
              onClick={(e) => handleNavClick(e, 'Researcher')}
            >
              Register as a researcher
            </Link>
            <Link 
              href="#waiting-list" 
              className={styles.registerBtn}
              onClick={(e) => handleNavClick(e, 'Funder')}
            >
              Discover Vetted Research
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.tab);
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waiting-list"
            className={styles.mobileRegisterBtn}
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleNavClick(e, 'Researcher');
            }}
          >
            Register as a researcher
          </Link>
        </div>
      )}
    </nav>
  );
}