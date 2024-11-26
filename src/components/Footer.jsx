import SocialMediaIcons from "./SocialMediaIcons"

const Footer = () => {
  
  return (
    <footer className="h-64 bg-red pt-10">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons />
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-semibold text-yellow text-2xl font-playfair">Jane Esper</p>
                <p className="font-playfair text-md text-yellow">ALL Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer