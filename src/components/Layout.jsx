import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import PropType from "prop-type"


export const Layout = ({ children }) => {
   return (

      <div className="font-space max-w-6xl 2xl:max-w-[130rem] mx-auto">
      <Navbar />

      <div>
      {children}
      </div>

      <Footer />
   </div>
   )
}

Layout.PropType ={
   children: PropTypes.node.isrequired,
};