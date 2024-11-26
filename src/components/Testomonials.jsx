import React from 'react'
import LineGradient from './LineGradient'
import { motion } from 'framer-motion'
const Testomonials = () => {
  const testomonialStyles = `mx-auto relative max-w-3/5 h-[350px] flex flex-col justify-center pt-16 mt-48
  before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 items-center px-6`
  return (
    <section id='testomonials' className='pt-32 pb-16'>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-50}, 
                visible: {opacity: 1, x:0}
            }}
            className='md:w-1/3 text-center md:text-left'>
                <p className='font-playfair font-semibold text-xl mb-5 text-red'>Testomonials</p>
                <LineGradient width='mx-a w-2/5' />
                <p className='mt-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Illum ex porro, molestias fugit repudiandae cumque maiores officia 
                </p>
            </motion.div>
                <div className='md:flex justify-between gap-8'>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, scale:0.6}, 
                        visible: {opacity: 1, scale:1}
                    }}
                    className={`bg-red ${testomonialStyles} before:content-person2`}
                    >
                        <p className='text-6xl font-playfair '>"</p>
                        <p className='text-center text-xl '>
                            this is a random text for testomonials
                        </p>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2 ,duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, scale:0.6}, 
                        visible: {opacity: 1, scale:1}
                    }}
                    className={`bg-yellow ${testomonialStyles} before:content-person3`}
                    >
                        <p className='text-6xl font-playfair text-deep-blue'>"</p>
                        <p className='text-center text-xl  text-deep-blue'>
                            this is a random text for testomonials
                        </p>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.4 , duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, scale:0.6}, 
                        visible: {opacity: 1, scale:1}
                    }}
                    className={`bg-blue ${testomonialStyles} before:content-person1`}
                    >
                        <p className='text-6xl font-playfair '>"</p>
                        <p className='text-center text-xl '>
                            this is a random text for testomonials
                        </p>
                    </motion.div>
                </div>
           
    </section>
  )
}

export default Testomonials