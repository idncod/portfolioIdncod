'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './DesktopMenu.module.scss';
import ClientOnly from '../ClientOnly';
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const DesktopMenu = () => {
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
        <div className={styles.desktopMenu}>
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
                <a href="https://www.linkedin.com/in/violaly/" target="_blank" rel="noopener noreferrer"
                   className={styles.iconLink}>
                    <FiLinkedin className={styles.icon}/>
                </a>
                <a href="https://twitter.com/viola-idncod/" target="_blank" rel="noopener noreferrer"
                   className={styles.iconLink}>
                    <FiTwitter className={styles.icon}/>
                </a>
                <a href="https://github.com/idncod" target="_blank" rel="noopener noreferrer"
                   className={styles.iconLink}>
                    <FiGithub className={styles.icon}/>
                </a>
            </div>
        </div>
    );
};

export default DesktopMenu;
