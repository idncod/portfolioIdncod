import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss';

const Navbar = () => {
    <nav className={`${styles.navbar}`}>
            <ul className={styles.navList}>
            <li className={`${styles.li}`}>
                <Link href="/blog">
                    Blog
                </Link>
            </li>
            <li className={`${styles.li}`}>
                <Link href="/work">
                    Work
                </Link>
            </li>
            <li className={`${styles.li}`}>
                <Link href="/contact" className={`${styles.li}`}>
                <button>Contact</button>
                </Link></li>
            </ul>
        </nav>
}


export default Navbar;