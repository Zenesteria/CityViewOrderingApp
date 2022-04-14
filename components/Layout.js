import Navbar from "./Navbar"
import Footer from "./Footer"

//Site Layout: Navbar > Content > Footer

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
