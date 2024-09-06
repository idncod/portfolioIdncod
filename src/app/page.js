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
                    <div className={styles.socialGrid}>
                        {/*<div className={styles.item}>*/}
                        {/*    <Link href="https://www.linkedin.com/in/violaly/">*/}
                        {/*        <FontAwesomeIcon icon={faLinkedinIn} className={styles.social}/>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        {/*<div className={styles.item}>*/}
                        {/*    <Link href="https://github.com/idncod">*/}
                        {/*        <FontAwesomeIcon icon={faGithub} className={styles.social}/>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}

                        {/*<div className={styles.item}>*/}
                        {/*    <Link href="https://twitter.com/viola-idncod">*/}
                        {/*        <svg className={styles.social} viewBox="0 0 24 24">*/}
                        {/*            /!* Paste your SVG content here *!/*/}
                        {/*            <path d="..."/>*/}
                        {/*        </svg>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        <div className={styles.item}>
                            <Link href="https://www.linkedin.com/in/violaly/">
                                <svg
                                    fill="#ccff00"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width="32px"
                                    height="32px"
                                    className={styles.social}
                                >
                                    <path
                                        d="M 8 3.0117188 C 6.3243556 3.0117186 4.8517223 3.4556501 3.7636719 4.3105469 C 2.6756214 5.1654436 2.0117188 6.4640138 2.0117188 7.9003906 C 2.0117188 10.773144 4.6048 12.988281 8 12.988281 C 9.7412258 12.988281 11.234704 12.477413 12.304688 11.5625 C 13.374671 10.647587 13.988281 9.3224486 13.988281 7.9003906 A 0.98809878 0.98809878 0 0 0 13.986328 7.8554688 C 13.861647 5.1114423 11.373244 3.0117188 8 3.0117188 z M 8 4.9882812 C 10.612452 4.9882814 11.919564 6.27684 12.007812 7.9199219 C 12.002386 8.7882363 11.669223 9.5069667 11.019531 10.0625 C 10.364515 10.622587 9.3587742 11.011719 8 11.011719 C 5.3952 11.011719 3.9882813 9.627637 3.9882812 7.9003906 C 3.9882812 7.0367674 4.3243786 6.3853376 4.9863281 5.8652344 C 5.6482777 5.3451311 6.6756444 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.699219 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45.099609 A 1.0001 1.0001 0 0 0 18 46.099609 L 28 46.099609 A 1.0001 1.0001 0 0 0 29 45.099609 L 29 29.099609 L 29 28.800781 L 29 28.5 C 29 26.533333 30.533333 25 32.5 25 C 34.466667 25 36 26.533333 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.855907 46.781684 20.586343 44.736328 18.361328 C 42.690972 16.136313 39.844829 15 36.800781 15 C 32.892578 15 30.522592 16.421774 29 17.583984 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.699219 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.599609 A 1.0001 1.0001 0 0 0 28.736328 20.275391 C 28.736328 20.275391 31.737145 17 36.800781 17 C 39.356734 17 41.609028 17.914859 43.263672 19.714844 C 44.918316 21.514828 46 24.244093 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.6949 25.257915 35.387842 23 32.5 23 C 29.466667 23 27 25.466667 27 28.5 L 27 28.800781 L 27 29.099609 L 27 44.099609 L 19 44.099609 L 19 17 z"/>
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <Link href="https://github.com/idncod">
                                <svg
                                    fill="#ccff00"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width="32px"
                                    height="32px"
                                    className={styles.social}
                                >
                                    <path
                                        d="M 25 2 C 12.354545 2 2 12.354545 2 25 C 2 37.645455 12.354545 48 25 48 C 37.645455 48 48 37.645455 48 25 C 48 12.354545 37.645455 2 25 2 z M 25 4 C 36.554545 4 46 13.445455 46 25 C 46 25.093716 45.993426 25.185862 45.992188 25.279297 C 45.355643 25.213574 44.619449 25.151947 43.683594 25.113281 C 42.349262 25.058153 40.667887 25.070474 38.767578 25.169922 C 38.842322 24.665304 38.893164 24.152982 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.101066 10.946801 24.590099 11.013672 25.072266 C 7.8894658 24.970983 5.518755 25.05331 4.0039062 25.191406 C 4.0033241 25.127325 4 25.064213 4 25 C 4 13.445455 13.445455 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8867188 26.019531 C 9.5909207 26.024035 10.397743 26.051943 11.203125 26.080078 C 11.281506 26.399647 11.374577 26.712873 11.484375 27.019531 C 8.1709433 27.091537 5.704398 27.434455 4.1835938 27.728516 C 4.1171404 27.221899 4.0664333 26.710385 4.0371094 26.193359 C 5.1545506 26.089867 6.7502168 26.005867 8.8867188 26.019531 z M 41.113281 26.076172 C 43.242845 26.051402 44.834805 26.164134 45.957031 26.283203 C 45.927668 26.764345 45.879919 27.240812 45.818359 27.712891 C 44.245568 27.413519 41.71721 27.071329 38.314453 27.015625 C 38.411856 26.742348 38.491935 26.461309 38.564453 26.177734 C 39.462674 26.126533 40.338362 26.085185 41.113281 26.076172 z M 37.892578 28.007812 C 41.465652 28.03978 44.085317 28.396925 45.666016 28.699219 C 44.325335 36.167288 39.008358 42.292747 32 44.789062 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.44296 30.280162 37.297012 29.208854 37.892578 28.007812 z M 11.908203 28.013672 C 12.505054 29.212023 13.359546 30.281496 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.789062 C 10.997174 42.294717 5.68379 36.176856 4.3378906 28.716797 C 5.863528 28.419405 8.4148311 28.06385 11.908203 28.013672 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.390625 C 28.396051 45.785878 26.721908 46 25 46 C 23.278092 46 21.603949 45.785878 20 45.390625 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"/>
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <Link href="https://x.com/viola-idncod">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 256 256"
                                    width="32px"
                                    height="32px"
                                    fill="#ccff00"
                                    className={styles.social}
                                >
                                    <g fill="#ccff00" fillRule="nonzero" stroke="none" strokeWidth="1"
                                       strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"
                                       strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none"
                                       fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"/>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className={styles.arrow}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </div>

                <div className={styles.main}>
                    <ZoomParallax/>
                </div>
            </section>

            <section>
                <h1 className="copy">WORK</h1>
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
                    <div>
                        <Image
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web3}
                            alt=""
                        />
                    </div>
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
                    <div>
                        <Image
                            className={styles.images}
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web6}
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section style={{display: 'grid', placeItems: 'center', minHeight: '100vh'}}>
                <ClientOnly>
                    <ProjectCard/>
                </ClientOnly>
            </section>

            <section className={styles.squareSectionContainer}>
                <div className={styles.squareSection}>
                READ MY BLOG
                </div>

                <div className={styles.squareSection}>
                    ABOUT ME HERE
                </div>
            </section>
        </>
    );
}
