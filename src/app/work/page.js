'use client'
import Image from "next/image";
// import EmblaCarousel from '../../components/embla/EmblaCarousel';
// import EmblaCarouselDotButton from '../../components/embla/EmblaCarouselDotButton';
import styles from '../page.module.scss'

const Work = () => {

  // const OPTIONS = { dragFree: true }
  // const SLIDE_COUNT = 5
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())  
  

  return (
    <div className={styles.work}>
      <section className="">
          <div>
            <h3 className="">
              Software Engineering<br/>is my passion and lifelong career.  
            </h3> 
                  {/*EMBLA CAROUSEL - 1.FEATURED WORK, 2.BLOG'S LATEST POST, 3.*/}
        {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}

            <Image alt="img1"/>  
          <div className="">
                    <p className="">
                    7 years&apos; expertise optimizing software for SaaS, eCommerce, fintech, construction, and travel industries.
                    </p>
                    <p className="">
                    I offer a systematic and carefully planned, resource-efficient web development service with no fuss.
                    </p>
                </div>
          </div>


          <div className="lg:flex gap-10 mt-8 md:mt-12 lg:mt-16">
            <div className="text-center shadow-lg p-8 md:p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="img2" />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2">
              Strategic System Design
              </h3>
              <p className="py-4">
              Implementing serverless architecture with AWS Lambda, orchestrating data flow using Apache Kafka, and integrating GraphQL subscriptions for real-time communication. Leveraging Docker and Kubernetes for containerization and orchestration, alongside Istio for service mesh management, ensuring seamless scaling, load balancing, and security in distributed microservices ecosystems. Applying advanced algorithms for data processing and AI-driven insights, optimizing performance and enhancing user experiences in intricate, data-intensive applications.</p>
            </div>
            <div className="text-center shadow-lg p-8 md:p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="img3" />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">
              Collaborative Ideation and Execution</h3>
              <p className="py-4">
              Embarking on the journey of translating your ideas into digital masterpieces, I engage in a comprehensive process that spans from strategic design to seamless deployment. Beginning with strategic design, I meticulously craft intuitive interfaces that prioritize user experiences. Following this, each iteration undergoes a rigorous review, ensuring precision and catching errors before they surface. Expert coding techniques are then employed, implementing robust solutions using cutting-edge technologies. This process is not linear; it&apos;s a constant loop of iterative refinement, where your feedback shapes the ongoing enhancements. Finally, the result is a seamless deployment, bringing your project to life with precision, passion, and a commitment to excellence.</p>
            </div>


            <div className="text-center shadow-lg p-8 md:p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="img4" />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">Strategic Iterative Feedback</h3>
              <p className="py-4">
              In the realm of web development, attention to detail is paramount. Throughout the entire process, I provide strategic iterative feedback, ensuring that your project stays on the cutting edge. My meticulous review process is designed not just to catch errors but to unearth every opportunity for improvement. By scrutinizing each element, we save valuable time, detecting and rectifying potential issues while they&apos;re still in their infancy. Real-time refinements are made, fostering continuous enhancement and paving the way for seamless integration of additional innovative ideas as your project evolves. This dynamic feedback loop guarantees that your project not only meets but exceeds your expectations, resulting in a web experience that is both flawless and innovative.</p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Work;

