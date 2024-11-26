import React from 'react'
import LineGradient from './LineGradient'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'
import Project from './Project'

const Projects = ({}) => {
    const container = {
        hidden: {}, 
        visible : {
            transition: {
                staggerChildren: 0.2
            }
        }
    }; 
    const projectVarients = {
        hidden: {opacity: 0, scale: 0.8}, 
        visible: {opacity: 1, scale:1}
    }
  return (
    <section id='projects' className='pt-48 pb-48'>
        {/*Headings*/}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, y:-50}, 
                visible: {opacity: 1, y:0}
            }}
            className='md:w-2/5 mx-auto text-center'>
                <div>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width='w-1/3' />
                    </div>
                <p className='font-playfair font-semibold text-xl'>My 
                    <span className='text-red'>PRO</span>JETS
                </p>
                </div>
                <p className='mt-10 mb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Illum ex porro, molestias fugit repudiandae cumque maiores officia 
                     suscipit minus facilis corporis ut,
                     a nam quasi! Doloribus vel provident ipsam magnam!
                </p>
            </motion.div>
            {/*Projects*/}
            <div className='flex justify-center'>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
                className='sm:grid sm:grid-cols-3'>
                    <div 
                        className='flex justify-center text-center items-center p-10 bg-red 
                        max-w-[400px] max-h-[400px] font-playfair font-semibold text-2xl'>
                        Beautiful User InterFaces
                    </div>
                    <Project title={"proJect 1"} projectVarients={projectVarients} />
                    <Project title={"proJect 2"} projectVarients={projectVarients} />
                    <Project title={"proJect 3"} projectVarients={projectVarients} />
                    <Project title={"proJect 4"} projectVarients={projectVarients} />
                    <Project title={"proJect 5"} projectVarients={projectVarients} />
                    <Project title={"proJect 6"} projectVarients={projectVarients} />
                    <Project title={"proJect 7"} projectVarients={projectVarients} />
                    <div 
                        className='flex justify-center text-center items-center p-10 bg-blue 
                        max-w-[400px] max-h-[400px] font-playfair font-semibold text-2xl'>
                        Smooth User Experience
                    </div>
                </motion.div>
            </div>
    </section>
  )
}

export default Projects