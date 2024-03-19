import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimationText from "@/component/AnimationText";
import Layout from "@/component/layout";
import Image from "next/image";
import Skills from "@/component/Skills";
import Profilpic from "../../public/images/profile/developer-pic.jpg";
import { useMotionValue, useSpring } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Experience from "@/component/Experience";
import Education from "@/component/Education";


const AnimationNumbers = ({value}) => {
    const ref = useRef(null);

    const isInView = useInView(ref)


    const motionValue = useMotionValue(0); // Initial value for animation
    const springValue = useSpring(motionValue, { duration: 3000 }); // Spring animation setup
  
    // Update motionValue only when the element is in view
    useEffect(() => {
      if (isInView) {
        motionValue.set(value); // Set to the provided value
      }
    }, [isInView, value]);
  
    // Update the span content only when the springValue changes significantly
    useEffect(() => {
      const unsubscribe = springValue.onChange((latest) => {
        const roundedValue = Math.round(latest); // Round to whole number
        if (ref.current) {
          ref.current.textContent = roundedValue;
        }
      });
  
      // Clean up the event listener on component unmount
      return unsubscribe;
    }, [springValue]);
  
    return <span ref={ref} />;
  };

const about = () => {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex w-full flex-col item-center justify-center">
                <Layout className='pt-16'>
                    <AnimationText text="Passion fuel     purpose" className="mb-16 !text-8xl" />
                    <div className="grid w-full grid-cols-8 gap-16 ">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75">About Me</h2>
                            <p className="font-medium text-2xl">
                                Hello! I'm Urvi sheladia, a full-stack developer eager to explore the exciting world of web development. I've recently embarked on this journey with a passion for creating innovative web applications that make a difference. While I'm relatively new to the field.
                            </p>
                            <p className="my-4 font-medium text-2xl">
                                My journey into full-stack development began with a fascination for websites and how they work. I started learning HTML, CSS, and JavaScript to build basic web pages and have since been exploring frameworks like React.js and Node.js to create more dynamic and interactive experiences. I'm fascinated by how components unite to create functional apps.
                            </p>
                            <p className="font-medium text-2xl">
                                As I continue to learn and grow, I'm excited to immerse myself in real-world projects and collaborate with others in the developer community. I believe in the power of continuous learning and am committed to refining my skills to become a proficient full-stack developer. I'm eager to contribute to meaningful projects and make a positive impact through my work.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
                            <Image src={Profilpic} atl="urvi" className="w=full h-auto rounded-2xl"></Image>
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-center">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimationNumbers value={10} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                <AnimationNumbers value={6} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Project Completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                <AnimationNumbers value={2} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Years of Experience</h2>
                            </div>
                        </div>
                    </div>
                  <Skills />
                  <Experience />
                  <Education />
                </Layout>
            </main>

        </div>
    );
}

export default about;
