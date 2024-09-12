'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.scss';
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import ClientOnly from "./ClientOnly";

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("viola-swe@proton.me");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const underlineVariants = {
        initial: { width: '0%' },
        hover: { width: '100%', transition: { duration: 0.3 } },
    };

    const wiggleVariants = {
        animate: {
            rotate: [0, -5, 5, -5, 5, 0],
            transition: { duration: 0.6, ease: 'easeInOut', repeat: 1 },
        },
    };

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.mainFooter}>
            <ul className={styles.navList}>
                <li className={styles.li}>
                    <ClientOnly>
                        <Link href="/" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.span
                                    className={styles.link}
                                    variants={wiggleVariants}
                                    whileHover={{scale: 1.1}}
                                    transition={{duration: 0.3}}
                                >
                                    Index
                                </motion.span>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </ClientOnly>
                </li>
                <li className={styles.li}>
                    <ClientOnly>
                        <Link href="/blog" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.span
                                    className={styles.link}
                                    variants={wiggleVariants}
                                    whileHover={{scale: 1.1}}
                                    transition={{duration: 0.3}}
                                >
                                    Blog
                                </motion.span>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </ClientOnly>
                </li>
                <li className={styles.li}>
                    <ClientOnly>
                        <Link href="/work" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.span
                                    className={styles.link}
                                    variants={wiggleVariants}
                                    whileHover={{scale: 1.1}}
                                    transition={{duration: 0.3}}
                                >
                                    Work
                                </motion.span>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </ClientOnly>
                </li>
                <li className={styles.li}>
                    <ClientOnly>
                        <Link href="/contact" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.span
                                    className={styles.link}
                                    variants={wiggleVariants}
                                    whileHover={{scale: 1.1}}
                                    transition={{duration: 0.3}}
                                >
                                    Contact
                                </motion.span>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </ClientOnly>
                </li>
            </ul>
            <div className={styles.socialIcons}>
                <a
                    href="https://www.linkedin.com/in/violaly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                >
                    <FiLinkedin className={styles.icon}/>
                </a>
                <a
                    href="https://twitter.com/viola-idncod/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                >
                    <FiTwitter className={styles.icon}/>
                </a>
                <a
                    href="https://github.com/idncod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                >
                    <FiGithub className={styles.icon}/>
                </a>
            </div>
            <div className={styles.copyEmailContainer}>
                <p>
                        <span className={styles.copyEmailFooter} onClick={copyToClipboard}>
                            {copied ? "email copied!" : "viola-swe@proton.me"}
                        </span>
                </p>
            </div>
            <div className={styles.copyright}>
                <p>
                    © {new Date().getFullYear()} idncod. Viola Lykova.
                </p>
            </div>
          </div>
        </footer>
    );
};

export default Footer;
