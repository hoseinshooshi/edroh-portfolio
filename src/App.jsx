import { useEffect, useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import HeroSection from './components/HeroSection';
import LineGradient from './components/LineGradient';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import { motion } from 'framer-motion';
import Testomonials from './components/Testomonials';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  const [isTopofPage , setISTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setISTopOfPage(true);
      if (window.scrollY !== 0) setISTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="app bg-deep-blue ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopofPage={isTopofPage} />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreen && (
          <DotGroup selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
           />
        )}
        <HeroSection setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'
      margin="0 0 -200px 0">
        <motion.div>
          <MySkills />
        </motion.div>
      </div>
        {/* <LineGradient /> */}
      <motion.div className='w-5/6 mx-auto mt-20'
      margin="0 0 -200px 0" >
        <Projects />
      </motion.div>
      <LineGradient />
      <div className='w-5/6 md:h-full mx-auto'>
        <Testomonials />
      </div>
      <div className='w-5/6 md:h-full mx-auto mt-48'>
        <ContactMe />
      </div>
      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}

export default App
