/* eslint-disable no-unused-vars */
'use client'
import Image from "next/image";
// import EmblaCarousel from '../../components/embla/EmblaCarousel';
// import EmblaCarouselDotButton from '../../components/embla/EmblaCarouselDotButton';
// import styles from '../page.module.scss'
import styles from './about.module.scss';

const Work = () => {

  // const OPTIONS = { dragFree: true }
  // const SLIDE_COUNT = 5
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())  
  

  return (
    <div className={styles.aboutContainer}>
      <section className={styles.greetingContainer}>
          <div className={styles.greeting}>
          <h1>
              Hi user 👋! I`&apos;`m Viola, a problem-solver and a software engineer.

              <span>&#10240;My passion and expertise are in designing sophisticated systems with limiting constraints.
              {/*I post in my blog regularly on tech things I'm intrigued to share my knowledge about.*/}
              On this page you`&apos;`ll read about my approach, tools, challenges, and how I overcome them.
              In my spare time, I enjoy scuba diving, I`&apos;`m a PADI-certified pro Divemaster.
                  I like being a mentor to fellow engineers and bring value with my experience.</span>
            </h1>

              <p>Most of my career I spent doing Frontend Engineering and solving problems, no matter how small or big.</p>
              <p>My favourite tools are teh ones I use to build EDA (event-driven architecture), which include but not limited to AWS Lambdas, EC2, RDS, EKS, and Terraform.</p>
              <p>I like EDA for its high availability and eventual consistency. This makes a system efficient even when scaling it.</p>
          </div>
</section>

{/*                  /!*EMBLA CAROUSEL - 1.FEATURED WORK, 2.BLOG'S LATEST POST, 3.*!/*/}
{/*                    /!* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> *!/*/}
{/*             <div className="paragraph">*/}
{/*              <p className="">*/}
{/*                    Having worked in industries like Finance, eCommerce, B2B, SaaS, and others, it is safe to say that it was only possible because I am creative problem-solver.*/}
{/*                    The fact that web engineering is a creative craft makes my career choice so wise that I can never get bored. Even problems that I have seen more than once have many possible implementations and in 99% cases have different constraints or/and requirements. years&apos; expertise optimizing software for SaaS, eCommerce, fintech, construction, and travel industries.*/}
{/*                    </p>*/}
{/*                    <p className="">*/}
{/*                    For over 7 years  I have been implementing successful strategies that were made possible because I pay attention to requirements and explain my solutions to my team, in search for flaws or positives, and to stakeholders, seeking confirmation of the requirements and constraints.*/}
{/*                    </p>*/}
{/*                 <p>Crafting design systems is never about finding the perfect solution for a given set of requirements, but it is about adjusting and compromising to meet the requirements to make the systems bend the way they have to offer a working solution in the given circumstances.</p>*/}
{/*                </div>*/}
{/*<div>*/}
{/*          <div className="lg:flex gap-10 mt-8 md:mt-12 lg:mt-16">*/}
{/*            <div className="text-center shadow-lg p-8 md:p-10 rounded-xl my-10 dark:bg-white flex-1">*/}
{/*              <Image alt="img2" />*/}
{/*              <h3 className="text-lg font-medium font-bold pt-8 pb-2">*/}
{/*              Strategic System Design*/}
{/*              </h3>*/}
{/*              <p className="py-4">*/}
{/*              Implementing serverless architecture with AWS Lambda, orchestrating data flow using Apache Kafka, and integrating GraphQL subscriptions for real-time communication. Leveraging Docker and Kubernetes for containerization and orchestration, alongside Istio for service mesh management, ensuring seamless scaling, load balancing, and security in distributed microservices ecosystems. Applying advanced algorithms for data processing and AI-driven insights, optimizing performance and enhancing user experiences in intricate, data-intensive applications.</p>*/}
{/*            </div>*/}
{/*            <div className="text-center shadow-lg p-8 md:p-10 rounded-xl my-10 dark:bg-white flex-1">*/}
{/*              <Image alt="img3" />*/}
{/*              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">*/}
{/*              Collaborative Ideation and Execution</h3>*/}
{/*              <p className="py-4">*/}
{/*              I engage in a comprehensive process that spans from strategic design to seamless deployment. Beginning with strategic design, through crafting intuitive interfaces that prioritize user experiences. Following this, each iteration undergoes a rigorous review, ensuring precision and catching errors before they surface. Expert coding techniques are then employed, implementing robust solutions using cutting-edge technologies. This process is not linear; it&apos;s a constant loop of iterative refinement, where your feedback shapes the ongoing enhancements. Finally, the result is a seamless deployment, bringing your project to life with precision, passion, and a commitment to excellence.</p>*/}
{/*            </div>*/}


{/*            <div className="text-center shadow-lg p-8 md:p-10 rounded-xl my-10 dark:bg-white flex-1">*/}
{/*              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">Strategic Iterative Feedback</h3>*/}
{/*              <p className="py-4">*/}
{/*              I pay attention to small details and I listen to the opinions to rule out the ultimate solution.*/}
{/*                  I treat the opportunity of mentoring as an opportunity to learn because new tech is emerging every year and unless mentoring, it can become tricky to stay abreast. On every opportunity to mentor, I provide strategic iterative feedback to improve how team operates, what methods are implemented, and how we optimize. This dynamic feedback loop guarantees progress.</p>*/}
{/*            </div>*/}
{/*          </div>*/}
{/*        </div>*/}
    </div>
  );
};

export default Work;

