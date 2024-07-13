import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import PropTypes from "prop-types"


export const Layout = ({ children }) => {
   return (

      <div className="font-space max-w-[24rem] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
      2xl:max-w-[130rem] mx-auto">
      <Navbar />

      <div>
      {children}
      </div>

      <Footer />
   </div>
   )
}

Layout.propType ={
   children: PropTypes.node.isRequired,
};