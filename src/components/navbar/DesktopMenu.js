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
                    <Link href="/blog" passHref>
                        <ClientOnly>
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
                        </ClientOnly>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/work" passHref>
                        <ClientOnly>
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
                        </ClientOnly>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/contact" passHref>
                        <ClientOnly>
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
                        </ClientOnly>
                    </Link>
                </li>
            </ul>
            <div className={styles.socialIcons}>
                <FiLinkedin className={styles.icon}/>
                <FiTwitter className={styles.icon}/>
                <FiGithub className={styles.icon}/>
            </div>
        </div>
    );
};

export default DesktopMenu;
