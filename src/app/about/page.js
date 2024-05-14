'use client';
import Image from "next/image";
import Pic1 from '../../../public/images/1.jpg'
import Pic2 from '../../../public/images/1.jpeg'
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import styles from '../page.module.scss';


export default function Home() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={container} className={styles.container}>
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} className={styles.containerPosition}>
      <p>About Page Is Coming Soon.<br/>Try scrolling!</p>
      <div className={styles.section}>
        <p>Viola</p>
        <p>Lykova</p>
      </div>
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <motion.div 
      style={{scale, rotate, opacity}} 
      className={`${styles.sectionMotion} ${styles.sectionMotionContainer}`}
    >
      <Image 
        src={Pic2}
        alt="img"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </motion.div>
  );
}


// const Section2 = ({scrollYProgress}) => {

//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

//   return (
//     <motion.div style={{scale, rotate}} className={styles.sectionMotion}>
//       <Image 
//         src={Pic2}
//         alt="img"
//         placeholder="blur"
//         fill
//       />
//     </motion.div>
//   )
// }

// const About = () => {


//   return (
//     <div className="about-page">
//       <section>
//         <div>WHAT SETS ME APART?</div>
//       </section>
//     </div>

//   );
// };

// export default About;

