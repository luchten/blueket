import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '../styles/MainMenu.module.css'
import GetStarted from './GetStarted';
import Link from 'next/link';

export default function MainMenu() {
    const [mainMenuState, setMainMenuState] = useState();
    useEffect(() => {
        const scrollHandle = () => {
            if (window.scrollY > 0) {
                setMainMenuState('down');
            } else {
                setMainMenuState();
            }
        }
        window.addEventListener('scroll', scrollHandle);
    }, []);
    return (
        <div className={mainMenuState === 'down' ? `${styles.main_menu_wrapper} ${styles.main_menu_wrapper_down}` : styles.main_menu_wrapper}>
            <div className='container'>
                <nav className={styles.main_menu}>
                    <Link href='/'><img src="/images/logo-white.svg" alt="blueket" /></Link>
                    <ul className={mainMenuState === 'down' ? `${styles.main_menu_links} ${styles.main_menu_links_down}` : styles.main_menu_links}>
                        <li>
                            Demo <i className="bi bi-caret-down"></i>
                            <ul className={styles.main_submenu_links}>
                                <li><Link href='/'>All Demo</Link></li>
                                <li><Link href='/'>Marketing Agency</Link></li>
                                <li><Link href='/'>Web Design</Link></li>
                                <li><Link href='/'>App Development</Link></li>
                                <li><Link href='/'>Business & Startup</Link></li>
                                <li><Link href='/'>Graphic Design</Link></li>
                                <li><Link href='/'>Branding Agency</Link></li>
                                <li><Link href='/'>Digital Agency</Link></li>
                                <li><Link href='/'>Freelancer Portfolio</Link></li>
                            </ul>
                        </li>
                        <li>
                            About Us <i className="bi bi-caret-down"></i>
                            <ul className={styles.main_submenu_links}>
                                <li><Link href='/'>About Page 1</Link></li>
                                <li><Link href='/'>About Page 2</Link></li>
                            </ul>
                        </li>
                        <li>
                            Services <i className="bi bi-caret-down"></i>
                            <ul className={styles.main_submenu_links}>
                                <li><Link href='/'>Service Page 1</Link></li>
                                <li><Link href='/'>Service Page 2</Link></li>
                                <li><Link href='/'>Service Page 3</Link></li>
                            </ul>
                        </li>
                        <li>
                            Portfolio <i className="bi bi-caret-down"></i>
                            <ul className={styles.main_submenu_links}>
                                <li><Link href='/'>Portfolio Page 1</Link></li>
                                <li><Link href='/'>Portfolio Page 2</Link></li>
                                <li><Link href='/'>Portfolio Page 3</Link></li>
                            </ul>
                        </li>
                        <li>
                            Blogs <i className="bi bi-caret-down"></i>
                            <ul className={styles.main_submenu_links}>
                                <li><Link href='/'>Blogs Page 1</Link></li>
                                <li><Link href='/'>Blogs Page 2</Link></li>
                                <li><Link href='/'>Blogs Page 3</Link></li>
                            </ul>
                        </li>
                        <li>
                            Contact Us <i className="bi bi-caret-down"></i>
                            <ul className={styles.main_submenu_links}>
                                <li><Link href='/'>Contact Page 1</Link></li>
                                <li><Link href='/'>Contact Page 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className={styles.main_menu_started}>
                        <div className={styles.telephone}>
                            <Link href='/'><i className="bi bi-telephone-fill"></i></Link>
                        </div>
                        <GetStarted />
                        <div className={styles.sun}>
                            <Link href='/'><i className="bi bi-brightness-high"></i></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
