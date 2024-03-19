import React, { useRef } from 'react';
import { motion, useViewportScroll } from 'framer-motion';


const Details = ({ type, time, place, info }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-center'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>
                    {type}&nbsp;
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>{info}</p>
            </div>
        </li>
    );
};

const Education= () => {
    const { scrollY, scrollYProgress } = useViewportScroll();
    const ref = useRef(null);

    console.log("scrollY:", scrollY.get());
    console.log("scrollYProgress:", scrollYProgress.get());
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl w-full mb-3 mt-5 text-center'>Education</h2> 
        <div ref={ref} className='w-[75%] mx-auto relative mt-20'>
              <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top ' />
              <ul className='w-full flex flex-col items-start justify-between ml-4'>
                  <Details
                      type="Bachelor's In Computer Engineering" 
                      time="2018-2022"
                      place="Indus Univesity"
                      info="A highly motivated and detail-oriented computer engineering graduate with a passion for solving complex problems and developing innovative solutions. Seeking opportunities to apply my technical skills and knowledge in a dynamic and challenging environment."
                  />
                  <Details
                      type="Master's In Computational Science" 
                      time="2023 present"
                      place="Laurentian University"
                      info="A Master's degree in Computational Science is an interdisciplinary program that combines elements of computer science, mathematics, and scientific disciplines to solve complex problems through computational methods."
                  />
                  <Details
                      type="Web Development" 
                      time="2020-2020"
                      place="Internshala"
                      info="Successfully completed a six weeks online certified training on Web Development. The training consisted of HTML &
                      CSS, Bootstrap, SQL and PHP modules. In the final assessment.
                      "
                      />
                  <Details
                      type="Data Science" 
                      time="2020-2020"
                      place="Coursera"
                      info="Successfully completed a six weeks online certified training on Data Science. The training consisted of Introduction to
                      Data Science, Python for Data Science, Understanding the Statistics for Data Science and Predictive Modeling and
                      Basics of Machine Learning modules. In the final assessment."
                      />
                  <Details
                      type="Graphic Design" 
                      time="Intershala"
                      place="Laurentian University"
                      info="Successfully completed a six weeks online certified training on Graphic Design. The training consisted of Fundamentals
                      of Graphic Design, Photoshop- Interface and Tools, Workflow and Photo Correction in Photoshop, Effects and Techniques
                      in Photoshop and Beauty Techniques in Photoshop modules."
                      />
              </ul>
          
          </div>    
          
    </div>
    
  )
}

export default Education
