import { Link } from 'react-router-dom'
import {iconProfile, logo } from '../img/imgs'


const NavbarShortComponent = () =>{
    return(
    <div className="navbarShort"> 
    <a href="./home" rel="noopener noreferrer">
    <img className="logoNestHeader" id="logoNestHeader" title="logoNestHeader"  alt="logoNestHeader" src={logo} />
    </a>
    <span> 
        <a href="./myAccount.html">               
            <img className="icon-profile icons-header" srcSet={iconProfile} src="../assets/icons/icon-profile.png" alt=""/> 
        </a>
    </span>
    <span className="text-profile">
            Faça seu
        <a id="link-login-header" title="link-login-header" className="link-login" href="./login">
            LOGIN
        </a>
            ou
        <a id="link-cadastre-se" title="link-cadastre-se" className="link-cadastre-se" href="/register">
            CADASTRE-SE
        </a>
    </span>     
</div>
)
} 
export default NavbarShortComponent