'use client';

import React, { useEffect, useState } from 'react';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                {isMobile ? (
                    <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                ) : (
                    <DesktopMenu />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
