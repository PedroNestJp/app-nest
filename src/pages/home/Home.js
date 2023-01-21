import React from "react"
import {HomeScComponente} from '../../components/HomeComponents copy'
import { HomeNavbarComponente } from "../../components/HomeNavbarComponent"
import { ContactLine1, ContactLine2 } from "../../components/ContactLines"
import HomeCss from "../home/Home.css"


const Home = () => {
    return(
            <div>
                <HomeNavbarComponente/>
                <ContactLine1/>
                <HomeScComponente/>
                <ContactLine2/>
                
            </div>
    )
}
export default Home