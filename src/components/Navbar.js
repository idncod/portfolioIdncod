'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.scss';
import ClientOnly from '../components/ClientOnly';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
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

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
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
                            <motion.span className={styles.underline} variants={underlineVariants} />
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
                            <motion.span className={styles.underline} variants={underlineVariants} />
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
                            <motion.span className={styles.underline} variants={underlineVariants} />
                        </motion.div>
                        </ClientOnly>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
