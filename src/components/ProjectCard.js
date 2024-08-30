import projects from '../projects.json';
import { useRouter } from 'next/navigation';
import styles from './ProjectCards.module.scss';
import {motion} from "framer-motion";

const ProjectCards = () => {
    const router = useRouter();

    const handleReadMoreClick = (route) => {
        router.push(route);
    };

    return (
        <div className={styles.cardContainer}>
            {projects.map((project) => (
                <motion.div
                    key={project.name}
                    className={styles.card}
                    whileHover={{ x: 10, y: -10 }}
                >
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <motion.button
                        className={styles.readMore}
                        whileTap={{ scale: 0.95, backgroundColor: "#ff4d4d" }}
                        onClick={() => handleReadMoreClick(project.route)}
                    >
                        See Project Details
                    </motion.button>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectCards;


// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import styles from './ProjectCard.module.scss';
//
// const ProjectCard = () => {
//     const router = useRouter();
//     const [isClient, setIsClient] = useState(false);
//
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//
//     const handleReadMoreClick = () => {
//         if (isClient) {
//             router.push('/work');
//         }
//     };
//
//     return (
//         <motion.div
//             className={styles.card}
//             whileHover="hover"
//             initial="initial"
//             animate="initial"
//             variants={cardVariants}
//         >
//             <motion.div className={styles.cardBorder} variants={borderVariants} />
//             <div className={styles.cardContent}>
//                 <motion.div className={styles.splitLeft} variants={splitVariants} />
//                 <motion.div className={styles.splitRight} variants={splitVariants} />
//                 <motion.div className={styles.aboutProject}>
//                     <h3>Project Title</h3>
//                     <p>Short description about the project.</p>
//                     <button onClick={handleReadMoreClick} className={styles.readMore}>
//                         Read More
//                     </button>
//                 </motion.div>
//             </div>
//         </motion.div>
//     );
// };
//
// const cardVariants = {
//     hover: {
//         boxShadow: '0px 0px 15px 5px rgba(255,0,0,0.6)',
//     },
//     initial: {
//         boxShadow: '0px 0px 0px rgba(0,0,0,0)',
//     },
// };
//
// const borderVariants = {
//     hover: {
//         border: ['2px solid transparent', '2px solid red', '2px solid transparent'],
//         transition: {
//             duration: 1.5,
//             repeat: Infinity,
//         },
//     },
// };
//
// const splitVariants = {
//     hover: {
//         x: (custom) => (custom === 'left' ? '-50%' : '50%'),
//         transition: {
//             duration: 0.5,
//             ease: 'easeInOut',
//         },
//     },
//     initial: {
//         x: 0,
//     },
// };
//
// export default ProjectCard;
