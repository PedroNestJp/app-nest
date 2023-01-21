import { Link } from "react-router-dom"
import { logo } from "../img/imgs"

const Footer = ()=>{
    return(

    <div className="footer">
        <div className="info-footer"> </div>
        <Link to='/home'>
            <img className="logoLogo" src={logo} alt='logo' />
        </Link>
    </div>

)
}
export default Footer
