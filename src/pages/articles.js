import Layout from '@/component/layout'
import React from 'react'
import AnimationText from '@/component/AnimationText'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "../../public/images/articles/article1.jpg"
import article2 from "../../public/images/articles/article2.jpg"
import {motion} from "framer-motion";

const FramerImage = motion(Image);

const FeatureArticle =({img, title, time, summary, link})  => {
  return(
      <li className='col-span-1 w-full p-4 border border-solid border-dark rounded-2xl'>
         <Link href={link} target="_blank"
          className='w-1/2 cursor-pointer inline-block overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto "
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} />
            </Link>
            <Link href={link} target="_blank">
              <h2 className='capitalize text-2xl font-bold my-2 hover: underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
      </li>
  )
}

const articles = () => {
  return (
    <div>
       <Head>
                <title>Article Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimationText text="Words Can Change The World!" className="mb-16 !text-4xl" />
                    <ul className='grid grid-cols-2 gap-16'>
                      <FeatureArticle 
                      title="Build A Custom Pagination Component In Reactjs From Scratch"
                      summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                      Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                     time=" 9 min read"
                     link="/"
                     img={article1}
                      />
                      <FeatureArticle 
                      title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                      summary="Learn how to create stunning loading screens in React with 3 different methods. 
                      Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                      Improve the user experience."
                     time=" 10 min read"
                     link="/"
                     img={article2}
                      />
                    </ul>
                </Layout>
            </main>
    </div>
  )
}

export default articles
