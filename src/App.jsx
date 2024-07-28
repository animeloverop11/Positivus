import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Pricing } from "./pages/Pricing"
import { Blog } from "./pages/Blog"
import { Services } from "./pages/Services"
import { Layout } from "./components/Layout"
import { ScrollToTop} from "./components/ScrollToTop"

function App() {

  return (
    <>
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/about-us" element={<Layout><About /></Layout>}/>
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>}/>
        <Route path="services" element={<Layout><Services /></Layout>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
