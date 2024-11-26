import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const DotGroup = ({selectedPage, setSelectedPage}) => {
    const selectedPageStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
    return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
        <AnchorLink
        className={`${selectedPage === 'home' ? selectedPageStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full `}
        href="#home"
        onClick={()=>setSelectedPage('home')} />
        <AnchorLink
        className={`${selectedPage === 'skills' ? selectedPageStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full `}
        href="#skills"
        onClick={()=>setSelectedPage('skills')} />
        <AnchorLink
        className={`${selectedPage === 'projects' ? selectedPageStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full `}
        href="#projects"
        onClick={()=>setSelectedPage('projects')} />
        <AnchorLink
        className={`${selectedPage === 'testomonials' ? selectedPageStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full `}
        href="#testomonials"
        onClick={()=>setSelectedPage('testomonials')} />
        <AnchorLink
        className={`${selectedPage === 'contact' ? selectedPageStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full `}
        href="#contact"
        onClick={()=>setSelectedPage('contact')} />
    </div>
  )
}

export default DotGroup