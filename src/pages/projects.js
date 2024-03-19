import React from 'react'
import Head from 'next/head'
import Layout from '@/component/layout'
import AnimationText from '@/component/AnimationText'
import Link from 'next/link'
import { GithubIcon } from '@/component/icon'
import project1 from "../../public/images/projects/project1.jpg";
import project2 from "../../public/images/projects/project2.jpg";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.jpg";
import project5 from "../../public/images/projects/project5.jpg";
import project6 from "../../public/images/projects/project6.png";
import Image from 'next/image'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border relative border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl'>
           <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto " />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2  font-bold text-dark text-2lg'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={github} target="_blank"
                     className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {

    return(
        <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative'>
             <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"/>
             <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto " />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
            
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={github} target="_blank"
                     className='text-lg font-semibold underline'>Visit </Link>
                    <Link href={github} target="_blank" className='w-8'><GithubIcon /></Link>
                    
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Project Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimationText text=" Imagination Trumps Knowledge!" 
                    className='mb-16 '/>

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                          <FeaturedProject 
                         title=" E-commerce Website Development"
                         img={project1}
                         summary=" Creating a functional e-commerce website is a substantial undertaking that involves various components. You’ll need to design an intuitive user interface, develop a secure payment processing system, and integrate a comprehensive product management system. Focusing on features like product listings allows you to explore database design while shopping carts and user accounts introduce you to user authentication and session management. The importance of this project lies in understanding how to create an online marketplace."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
                        </div>
                        <div className='col-span-6'>
                        <Project 
                         title="Inventory Management System"
                         img={project2}
                         summary=" An inventory management system is essential for businesses, and creating one offers insights into database management and supply chain operations. You’ll need to design a system that tracks inventory levels, manages orders, and automates restocking processes. This project exposes you to the challenges of real-time data updates and order fulfillment, teaching you about efficient resource management."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
                        </div>
                        <div className='col-span-6'>
                        <Project 
                         title="  E-Learning Platform"
                         img={project3}
                         summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
                        </div>
                        <div className='col-span-12'>
                        <FeaturedProject 
                         title=" Real-time Traffic Monitoring System"
                         img={project4}
                         summary=" A real-time traffic monitoring system collects and displays live traffic data to help users plan their routes efficiently. This project requires integrating data from various sources and visualizing it in real time. It addresses the importance of traffic management and smart transportation systems in urban areas, emphasizing user convenience and safety. However, this is one of the best mini project ideas for IT students. "
                          link="/"
                          github="/"
                          type="Featured project"
                          />
                        </div>
                        <div className='col-span-6'>
                        <Project 
                         title=" Online Quiz Game"
                         img={project5}
                         summary=" Online Quiz Game is one of the simple mini project ideas for IT students. Developing an online quiz game allows users to test their knowledge and compete with others. Features like categories, questions, and a leaderboard create a competitive and engaging experience. This project emphasizes the educational and entertainment aspects of technology, showcasing the potential for interactive learning and friendly competition."
                          link="/"
                          github="/"
                          type="Featured project"
                          />
                        </div>
                        <div className='col-span-6'>
                        <Project 
                         title=" Online Food Ordering System"
                         img={project6}
                         summary=" The online food ordering system project is an excellent opportunity to explore the intricacies of web application development. It involves designing an intuitive menu browsing system, integrating user reviews and ratings, and implementing order tracking and delivery features. This project reflects real-world applications in the food delivery industry, highlighting the importance of usability and user feedback in web application design. However, this is one of the best mini project ideas for IT students. "
                          link="/"
                          github="/"
                          type="Featured project"
                          />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
