import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
   return(
     <div className="flex items-center justify-between py-10 2xl:py-16">


      {/* Website Logo */}
      <Link to="/" className="flex items-center gap-1">
      <img src="/Icon.svg" alt="Positivius logo" width={30} height={30} />
       <h1 className="text-2xl 2xl:text-5xl font-semibold">Positivus</h1>
        </Link>
        
   
         {/* Navigation Links*/}
         <div className="hidden md:flex gap-10">
            <Link to="/about-us"className="text-base 2xl:text-3xl">About Us</Link>

            <Link to="/services"className="text-base 2xl:text-3xl">Services</Link>

            <Link to="/pricing"className="text-base 2xl:text-3xl">Pricing</Link>

            <Link to="/blog"className="text-base 2xl:text-3xl">Blog</Link>
            
         </div>


         {/*Hamburger Menu */}
         <div className="flex md:hidden">
            <RxHamburgerMenu className="w-10 h-10 "/>
         </div>
      </div>
   )
}