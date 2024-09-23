'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const MobileMenu = ({ isOpen, toggleMenu }) => {
    const circleVariants = {
        hidden: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
        visible: {
            scale: 30,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeInOut' },
        },
        exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
    };

    const menuVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.4,
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
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

    const handleLinkClick = () => {
        toggleMenu();
    };

    return (
        <div className={styles.mobileMenu}>
            <motion.div
                className={styles.circle}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                exit="exit"
                variants={circleVariants}
            />

            <div className={styles.burgerMenu} onClick={toggleMenu}>
                {isOpen ? (
                    <FiX className={`${styles.icon} ${styles.openIcon}`}/>
                ) : (
                    <FiMenu className={`${styles.icon} ${styles.closedIcon}`}/>
                )}
            </div>

            <motion.div
                className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                variants={menuVariants}
            >
                <ul className={styles.navList}>
                    <motion.li className={styles.li} variants={itemVariants}>
                        <Link href="/" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                                onClick={handleLinkClick}
                            >
                                <motion.div className={styles.link} variants={wiggleVariants}>
                                    Index
                                </motion.div>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </motion.li>

                    {/*<motion.li className={styles.li} variants={itemVariants}>*/}
                    {/*    <Link href="/blog" passHref>*/}
                    {/*        <motion.div*/}
                    {/*            className={styles.linkWrapper}*/}
                    {/*            whileHover="hover"*/}
                    {/*            initial="initial"*/}
                    {/*            onClick={handleLinkClick}*/}
                    {/*        >*/}
                    {/*            <motion.div className={styles.link} variants={wiggleVariants}>*/}
                    {/*                Blog*/}
                    {/*            </motion.div>*/}
                    {/*            <motion.span className={styles.underline} variants={underlineVariants}/>*/}
                    {/*        </motion.div>*/}
                    {/*    </Link>*/}
                    {/*</motion.li>*/}

                    <motion.li className={styles.li} variants={itemVariants}>
                        <Link href="/portfolio" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                                onClick={handleLinkClick}
                            >
                                <motion.div className={styles.link} variants={wiggleVariants}>
                                    Portfolio
                                </motion.div>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </motion.li>

                    <motion.li className={styles.li} variants={itemVariants}>
                        <Link href="/about" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                                onClick={handleLinkClick}
                            >
                                <motion.div className={styles.link} variants={wiggleVariants}>
                                    About
                                </motion.div>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </motion.li>

                    <motion.li className={styles.li} variants={itemVariants}>
                        <Link href="/contact" passHref>
                            <motion.div
                                className={styles.linkWrapper}
                                whileHover="hover"
                                initial="initial"
                                onClick={handleLinkClick}
                            >
                                <motion.div className={styles.link} variants={wiggleVariants}>
                                    Contact
                                </motion.div>
                                <motion.span className={styles.underline} variants={underlineVariants}/>
                            </motion.div>
                        </Link>
                    </motion.li>

                    <div className={styles.socialIcons}>
                        <a
                            href="https://www.linkedin.com/in/violaly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconLink}
                        >
                            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                                <FiLinkedin className={styles.icon}/>
                            </motion.div>
                        </a>
                        <a
                            href="https://twitter.com/viola-idncod"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconLink}
                        >
                            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                                <FiTwitter className={styles.icon}/>
                            </motion.div>
                        </a>
                        <a
                            href="https://github.com/idncod"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconLink}
                        >
                            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                                <FiGithub className={styles.icon}/>
                            </motion.div>
                        </a>
                    </div>
                </ul>
            </motion.div>
        </div>
    );
};

export default MobileMenu;
