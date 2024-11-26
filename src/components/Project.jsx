import React from 'react'
import { motion } from 'framer-motion';
const Project = ({title , projectVarients}) => {
  const proJectTitle = title.split(" ").join("-").toLowerCase();
  const overlayStyles = "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
  return (
    <motion.div variants={projectVarients} className='relative'>
        <div className={overlayStyles}>
            <p className='text-2xl font-playfair'>{title}</p>
            <p className="mt-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore
                , saepe labore non, esse incidunt totam quaerat 
                magnam illo quidem aperiam numquam voluptatibus maiores vitae rerum alias ex ullam hic!
            </p>
        </div>
        <img src={`../assets/${proJectTitle}.jpeg`} alt={proJectTitle} />
    </motion.div>
  )
}

export default Project