'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const MobileMenu = ({ isOpen, toggleMenu }) => {
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
        <div className={styles.mobileMenu}>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                {isOpen ? <FiX className={styles.icon}/> : <FiMenu className={styles.icon}/>}
            </div>
            <div className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.li}>
                        <Link href="/blog" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.a
                                    className={styles.link}
                                    variants={wiggleVariants}
                                >
                                    Blog
                                </motion.a>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/work" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.a
                                    className={styles.link}
                                    variants={wiggleVariants}
                                >
                                    Work
                                </motion.a>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/contact" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                            >
                                <motion.a
                                    className={styles.link}
                                    variants={wiggleVariants}
                                >
                                    Contact
                                </motion.a>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </li>
                    <div className={styles.socialIcons}>
                        <FiLinkedin className={styles.icon}/>
                        <FiTwitter className={styles.icon}/>
                        <FiGithub className={styles.icon}/>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
