'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.scss';
import ClientOnly from '../components/ClientOnly';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust based on your breakpoint
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                {isMobile && ( // Show burger only on mobile
                    <div className={styles.burgerMenu} onClick={toggleMenu}>
                        {isOpen ? <FiX className={styles.icon}/> : <FiMenu className={styles.icon}/>}
                    </div>
                )}
                <ul className={`${styles.navList} ${isMobile && isOpen ? styles.open : ''}`}>
                    <li className={styles.li}>
                        <Link href="/blog" passHref>
                            <ClientOnly>
                                <motion.div
                                    className={styles.linkWrapper}
                                    whileHover="hover"
                                    initial="initial"
                                    key={isMounted ? 'mounted' : 'unmounted'}
                                >
                                    <motion.a
                                        className={styles.link}
                                        animate={isMounted ? 'animate' : false}
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
                                    key={isMounted ? 'mounted' : 'unmounted'}
                                >
                                    <motion.a
                                        className={styles.link}
                                        animate={isMounted ? 'animate' : false}
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
                                    key={isMounted ? 'mounted' : 'unmounted'}
                                >
                                    <motion.a
                                        className={styles.link}
                                        animate={isMounted ? 'animate' : false}
                                        variants={wiggleVariants}
                                    >
                                        Contact
                                    </motion.a>
                                    <motion.span className={styles.underline} variants={underlineVariants}/>
                                </motion.div>
                            </ClientOnly>
                        </Link>
                    </li>
                    {/* Social icons moved inside mobile menu */}
                    {isMobile && isOpen && (
                        <div className={styles.socialIcons}>
                            <FiLinkedin className={styles.icon}/>
                            <FiTwitter className={styles.icon}/>
                            <FiGithub className={styles.icon}/>
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
