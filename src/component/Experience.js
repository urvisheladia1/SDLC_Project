import React, { useRef } from 'react';
import { motion, useViewportScroll } from 'framer-motion';


const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-center'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;
                    <a href={companyLink} target='_blank' rel='noopener noreferrer' className='text-primary capitalize'>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>{work}</p>
            </div>
        </li>
    );
};

const Experience = () => {
    const { scrollY, scrollYProgress } = useViewportScroll();
    const ref = useRef(null);

    console.log("scrollY:", scrollY.get());
    console.log("scrollYProgress:", scrollYProgress.get());
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl w-full mb-3 mt-5 text-center'>Experience</h2> 
        <div ref={ref} className='w-[75%] mx-auto relative mt-20'>
              <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top ' />
              <ul className='w-full flex flex-col items-start justify-between ml-4'>
                  <Details
                      position="Front-End Developer" company="Vijayshree Pvt. Ltd."
                      companyLink="www.abc.com"
                      time="2018-2019" address="Ahemdabad, India"
                      work="Worked on a team responsible for developing new features for websit, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
                  />
                  <Details
                      position="Intern" company="Infolabz Pvt. Ltd."
                      companyLink="www.abc.com"
                      time="2019-2020" address="Ahemdabad, India"
                      work="Internship in python development, pandas, NumPy, Matplotlib, Etcetera..
            ➢ Worked on a project “IoT based Smart Farming Solutions” which consists Python, Django,
            IoT Sensors, Arduino Hardware and Software, Etcetera.."
                  />
                  <Details
                      position="Software Engineer" company="Vijayshree Pvt. Ltd."
                      companyLink="www.abc.com"
                      time="2020-2021" address="Ahemdabad, India"
                      work="Led the development of secure software solutions with the MERN stack at Searce Inc, Ahmedabad, India. Managed version control with Git, practiced Agile methodologies, and implemented rigorous testing strategies. Ensured SLA adherence while efficiently resolving customer queries via phone and email, optimizing task management with a ticketing tool."
                  />
                  <Details
                      position="Full-Stack" company="InnovaTech Solutions"
                      companyLink="www.abc.com"
                      time="2021-2022" address="Ahemdabad, India"
                      work="As a Full Stack Developer, I have play a pivotal role in the development and maintenance of our web-based applications. i was responsible for both front-end and back-end development, ensuring seamless integration and optimal performance across the stack. Working closely with our cross-functional team, I got the opportunity to contribute to the entire software development lifecycle, from concept to deployment."
                  />
              </ul>
          
          </div>    
          
    </div>
    
  )
}

export default Experience
