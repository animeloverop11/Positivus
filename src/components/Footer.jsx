import { Link } from "react-router-dom"
import {FaLinkedin ,FaFacebook, FaTwitter } from "react-icons/fa";
export const Footer = () => {
   return(
      <div className="bg-[#191A23] h-[850px] 2xl:rounded-t-[100px] mt-20 rounded-t-[50px] px-10 ">
          <div className="flex items-center justify-between py-10 2xl:py-16">


{/* Website Logo */}
<Link to="/" className="flex items-center gap-1">
<img src="/Icon.svg" alt="Positivius logo" width={30} height={30} />
 <h1 className="text-2xl 2xl:text-5xl font-semibold text-white">Positivus</h1>
  </Link>
  

   {/* Navigation Links*/}
   <div className="hidden md:flex gap-10 text-white">
      <Link to="/about-us"className="text-base 2xl:text-3xl underline">About Us</Link>

      <Link to="/services"className="text-base 2xl:text-3xl underline">Services</Link>

      <Link to="/pricing"className="text-base 2xl:text-3xl underline">Pricing</Link>

      <Link to="/blog"className="text-base 2xl:text-3xl underline">Blog</Link>
   
   </div>
    
    {/* Social Media */}
    
    <div className="flex items-center justify-center gap-4">
                    <Link to="https://www.linkedin.com" target="_blank">
                        <FaLinkedin className="w-12 h-12 bg-white"/>
                    </Link>

                    <Link to="https://www.facebook.com" target="_blank">
                        <FaFacebook className="w-12 h-12 bg-white"/>
                    </Link>

                    <Link to="https://www.twitter.com" target="_blank">
                    <FaLinkedin className="w-12 h-12 bg-white"/>

                    </Link>
                    </div>
               
</div>
       

      </div>
   )
}