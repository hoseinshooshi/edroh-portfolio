import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery.jsx'
import { motion } from 'framer-motion'
import SocialMediaIcons from './SocialMediaIcons'
const HeroSection = ({setSelectedPage}) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    //1 hour: 25 min: 55 seconds
    return (
    <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
        {/* Image Section */}
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
            {isAboveMediumScreen ? (
            <div
            className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
            before:w-full before:rounded-t-[400px] before:h-full before:max-w-[400px]
            before:border-2 before:border-blue before:z-[-1]'>
                <img src="../assets/profile-image.png" alt="profile"
                className='hover:filter hover:saturate-200 transition duration-500 z-10
                w-full max-w-[350px] md:max-w-[400px]' />
            </div>) : (
            <img src="../assets/profile-image.png" alt="profile"
            className='hover:filter hover:saturate-200 transition duration-500 z-10
            w-full max-w-[350px] md:max-w-[400px]' />
            )}
            </div>
            {/*Main Section*/}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50}, 
                        visible: {opacity: 1, x:0}
                    }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        Jane {""}
                        <span className='xs:relative xs:text-deep-blue xs:font-semibold z-20
                        xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
                            Esper
                        </span>
                    </p>
                    <p className='mt-10 mb-7 text-sm text-center md:text-start '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed velit, 
                        earum vel ut similique reprehenderit, odio minima beatae dignissimos architecto magnam,
                         eaque nostrum! Impedit nobis voluptatem sed fuga quaerat.
                    </p>
                </motion.div>
                {/*Call To Actions*/}
                <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradiant-rainblue text-deep-blue rounded-sm py-3 px-10 font-semibold
              hover:bg-blue hover:text-white transition duration-500 text-center "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="hover:bg-deep-blue py-3 border-2 border-transparent hover:border-2 hover:border-red bg-red rounded-r-sm hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
                <motion.div className='flex mt-5 justify-center md:justify-start'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.4 , duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50}, 
                    visible: {opacity: 1, x:0}
                }}>
                    <SocialMediaIcons />
                </motion.div>

            </div>
    </section>
  )
}

export default HeroSection