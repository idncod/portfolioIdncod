'use client';
import Link from 'next/link';
import styles from './page.module.scss';
import ZoomParallax from '../components/ZoomParallax/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { TypeAnimation } from 'react-type-animation';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import web1 from "../../public/images/cypress-rrs.png";
import web2 from "../../public/images/web2.png";
import web3 from "../../public/images/web3.png";
import web4 from "../../public/images/web4.png";
import web5 from "../../public/images/web5.png";
import web6 from "../../public/images/web6.png";
import ProjectCard from '../components/ProjectCard';
import ClientOnly from "../components/ClientOnly";
import { SlFire } from "react-icons/sl";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiRocketLaunch, HiMiniStar, HiMiniSun } from "react-icons/hi2";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Head>
                <title>idncod. Viola Lykova. Software Engineer, Frontend, DevOps, Fullstack.</title>
                <meta name="description" content="idncod"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.main}>
                <div className={styles.copyheading}>
                    <TypeAnimation
                        sequence={[
                            'Viola Lykova',
                            1000,
                            'Software Engineer',
                            1000,
                            'Problem-Solver',
                            1000,
                            'Frontend',
                            1000,
                            'DevOps',
                            1000,
                            'Fullstack',
                            1000,
                            () => {
                                console.log('text animate completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="typing-animation"
                    />
                </div>

                <div className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                        <HiRocketLaunch className={styles.icon} />
                        <p className={styles.iconText}>Fast agile delivery</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <HiMiniStar className={styles.icon} />
                        <p className={styles.iconText}>Maximum dedication</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <HiMiniSun className={styles.icon} />
                        <p className={styles.iconText}>Insightful</p>
                    </div>
                </div>

                <section style={{display: 'grid', placeItems: 'center', minHeight: '100vh'}}>
                    <ClientOnly>
                        <ProjectCard/>
                    </ClientOnly>
                </section>

                <div className={styles.main}>
                    <ZoomParallax/>
                </div>
            </section>

            <section>
                <div className={styles.imagesContainer}>
                    <div>
                        <Link href="https://redroverschool.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className={styles.images}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web1}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="https://github.com/idncod/ipmatcher_csharp" target="_blank"
                              rel="noopener noreferrer">
                            <Image
                                className={styles.images}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web2}
                                alt=""
                            />
                        </Link>
                    </div>
                    {/*<div>*/}
                    {/*    <Image*/}
                    {/*        className="rounded-lg object-cover"*/}
                    {/*        width={"100%"}*/}
                    {/*        height={"100%"}*/}
                    {/*        layout="responsive"*/}
                    {/*        src={web3}*/}
                    {/*        alt=""*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="basis-1/3 flex-1">
                        <Link href="https://jet-pagination.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className={styles.images}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web4}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="https://beautybe.uk" target="_blank" rel="noopener noreferrer">
                            <Image
                                className={styles.images}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web5}
                                alt=""
                            />
                        </Link>
                    </div>
                    {/*<div>*/}
                    {/*    <Image*/}
                    {/*        className={styles.images}*/}
                    {/*        width={"100%"}*/}
                    {/*        height={"100%"}*/}
                    {/*        layout="responsive"*/}
                    {/*        src={web6}*/}
                    {/*        alt=""*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    );
}
