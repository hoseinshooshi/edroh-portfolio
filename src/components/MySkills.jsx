import React from 'react'
import LineGradient from './LineGradient'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'
const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  return (
    <section id='skills' className='pt-10 pb-24' >
        {/*Header And Image Section*/}
        <div className='md:flex md:justify-between md:gap-16 mt-16'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-50}, 
                visible: {opacity: 1, x:0}
            }}
            className='md:w-1/3'>
                <p className='font-playfair font-semibold text-xl mb-5'>My 
                    <span className='text-red'>Skills</span>
                </p>
                <LineGradient width='w-1/3' />
                <p className='mt-10 mb-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Illum ex porro, molestias fugit repudiandae cumque maiores officia 
                     suscipit minus facilis corporis ut,
                     a nam quasi! Doloribus vel provident ipsam magnam!
                </p>
            </motion.div>
            <div className='mt-16 md:mt-0'>
                { isAboveMediumScreen ? (<div
            className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full
            before:border-2 before:border-blue before:z-[-1]'>
                <img src="../assets/skills-image.png" alt="Skills"
                className='z-10' />
                </div>) :(
                    <img src="../assets/skills-image.png" alt="Skills"
                    className='z-10' />
                )}
            </div>
        </div>
        {/*Skills*/}
        <div className='md:flex md:justify-between justify-between items-center mt-16 gap-32'>
                {/*Exprience */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y:50}, 
                    visible: {opacity: 1, y:0}
                }}
                className='md:w-1/3 mt-32 md:mt-10'>
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>01</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Exprience</p>
                            <div className='w-[300px] md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'>

                            </div>
                            <p className='mt-5 md:mt-10'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                 Voluptates quaerat tenetur delectus ipsum saepe, praesentium et tempore ab, quidem facilis,
                                 quasi suscipit deleniti? Delectus temporibus illum voluptatibus animi. Inventore, consequatur?
                            </p>
                        </div>
                    </div>
                </motion.div>
                {/*Innovative */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2 ,duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y:50}, 
                    visible: {opacity: 1, y:0}
                }}
                className='md:w-1/3 mt-32 md:mt-10'>
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>02</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Innovative</p>
                            <div className='w-[300px] md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'>

                            </div>
                            <p className='mt-5 md:mt-10'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                 Voluptates quaerat tenetur delectus ipsum saepe, praesentium et tempore ab, quidem facilis,
                                 quasi suscipit deleniti? Delectus temporibus illum voluptatibus animi. Inventore, consequatur?
                            </p>
                        </div>
                    </div>
                </motion.div>
                {/**Imagenitve */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.4 , duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y:50}, 
                    visible: {opacity: 1, y:0}
                }}
                className='md:w-1/3 mt-32 md:mt-10'>
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>03</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Imagenative</p>
                            <div className='w-[300px] md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]'>

                            </div>
                            <p className='mt-5 md:mt-10'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                 Voluptates quaerat tenetur delectus ipsum saepe, praesentium et tempore ab, quidem facilis,
                                 quasi suscipit deleniti? Delectus temporibus illum voluptatibus animi. Inventore, consequatur?
                            </p>
                        </div>
                    </div>
                </motion.div>
        </div>
    </section>
  )
}

export default MySkills