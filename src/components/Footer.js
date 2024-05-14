'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from '../app/page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("viola-swe@proton.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerItem}>
        <div>
          <p>
            <span className={styles.emailFooter} onClick={copyToClipboard}>
              {copied ? "email copied!" : "viola-swe@proton.me"}
            </span>
          </p>
              
        <div className={styles.flexyFooter}>
          <div className={`${styles.item}`}>
              <Link href="https://www.linkedin.com/in/violaly/">
                  <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
              </Link>
          </div>
          <div className={`${styles.item}`}>
              <Link href="https://github.com/idncod">
                  <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              </Link>
          </div>
          <div className={`${styles.item}`}>
              <Link href="https://twitter.com/vetka_diver">
                  <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
              </Link>
          </div>
        </div>



        <div className={styles.footerNav}>
          <div className={styles.links}>
          <Link href="/">HOME</Link>
          </div>
          <div className={styles.links}>
          <Link href="/work">WORK</Link>
          </div>
          <div className={styles.links}>
          <Link href="/blog">BLOG</Link>
          </div>
          <div className={styles.links}>
          <Link href="/about">ABOUT</Link></div>
        </div>
      </div>


          <div className={styles.date}>
            <p>
              © {new Date().getFullYear()} idncod. Viola Lykova.
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;

