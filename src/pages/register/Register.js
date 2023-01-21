import React from "react"
import NavbarShortComponent from "../../components/NavbarShortComponent"
import RegisterComponents from "../../components/RegisterComponents"
import Footer from '../../components/FooterComponents'
import registerCss from "../register/Register.css"

const register = () => {
 return(
  <>
    <NavbarShortComponent/>
    <RegisterComponents/>
    <Footer/>
  </>
 )
}

export default register