import { Link } from "react-router-dom"

export const Navbar = () => {
   return(
     <div className="flex items-center justify-between py-10 2xl:py-16">


      {/* Website Logo */}
      <Link to="/" className="flex items-center gap-1">
      <img src="/Icon.svg" alt="Positivius logo" width={25} height={25} />
       <h1 className="text-2xl 2xl:text-4xl">Positivus</h1>
        </Link>
        
   
         {/* Navigation Links*/}
         <div className="hidden md:flex gap-10">
            <Link to="/about-us"className="text-base 2xl:text-xl">About Us</Link>

            <Link to="/services"className="text-base 2xl:text-xl">Services</Link>

            <Link to="/pricing"className="text-base 2xl:text-xl">Pricing</Link>

            <Link to="/blog"className="text-base 2xl:text-xl">Blog</Link>
            
         </div>
      </div>
   )
}