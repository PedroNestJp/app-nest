import { Link } from "react-router-dom"
import '../pages/home/Home'
import Home from "../pages/home/Home.css"
import {iconProfile, logo, iconBuy, iconChat, 
  iconFacebook, iconFavorites, iconGmail, 
  iconLinkedin, iconLupa, iconShopCart, iconSupport, iconTelegram, 
  iconWhatsapp, iconYoutube, imgAmdType, imgBackground2, iconInstagram, 
  typepc1, typepc2, typepc3, gab1, gab2,gab3,imgIntelType, imgBbdPc, imgBbdMonitor, imgBbdPeripherals, imgBbdHardware, menu3pontos, starIcon
} from '../img/imgs'


const Header = () => {

return(
<>
<div className="navbarhome"> 
            <Link to='/home'>
              <img className="logoNestHeaderHome" src={logo} alt='logo' />
            </Link>
          <span > 
            <img srcSet={menu3pontos} className="menu-3pontos" src="../assets/icons/menu3pontos.png" alt=""/> 
          </span>
          <input className="search" id="busque-aqui" autoComplete="off" placeholder="Busque aqui" type="text">
          </input>
          <span> 
            <Link to='/myAccount'>
              <img className="icon-profile-home icons-header" src={iconProfile} alt=""/> 
            </Link>
          </span>
          <span className="text-profile-home">
              Faça seu
            <Link to='/login' id="link-login-header-home" title="link-login-header" className="link-login-home" href="/login">
              LOGIN 
            </Link>
             ou
            <Link to='/register' id="link-cadastre-se-home" title="link-cadastre-se" className="link-cadastre-se-home" href="/register">
            CADASTRE-SE
            </Link>
          </span>
          <span> 
            <Link to='/ShoppingCart'> 
              <img srcSet={iconShopCart} className="icon-shoppingCart icons-header" id="icon-shoppingCart" title="icon-shoppingCart"  src="../assets/icons/icon-shoppingCart.png" alt=""/>
            </Link>
          </span>
          <span> 
              <Link to='/Support'> 
                  <img srcSet={iconSupport} className="icon-support icons-header" id="icon-supporte" title="icon-supporte" src="../assets/icons/icon-support.png" alt=""/>
              </Link>
          </span>
          <span > 
              <Link to='/Favorites'>
                  <img srcSet={iconFavorites} className="icon-favorite icons-header" id="icon-favorite" title="icon-favorite" src="../assets/icons/icon-favorite.png" alt=""/>
              </Link>
          </span>
          <button className="button-submit" >
              <img srcSet={iconLupa} id="icon-lupa" title="icon-lupa" className="icon-lupa" type="submit"  alt="icon-lupa"/>
          </button>
  </div>

  <div className="line" id="lineHome">
        <span> 
            <Link href="https://www.facebook.com/nestinformatica/"> 
                <img id="iconFacebook" className="social-media" srcSet={iconFacebook} alt=""/>
            </Link>
        </span> 
        <span> 
          <Link href="#"> 
            <img className="social-media" srcSet={iconGmail} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="https://www.instagram.com/nestinformatica/"> 
            <img className="social-media" srcSet={iconInstagram}  alt=""/> 
          </Link>
        </span>
        <span> 
          <Link  href="https://www.linkedin.com/company/nestinformatica/"> 
            <img className="social-media" srcSet={iconLinkedin} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="#"> 
           <img className="social-media" srcSet={iconTelegram} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="#"> 
            <img className="social-media" srcSet={iconWhatsapp} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="https://www.youtube.com/channel/UCBH2a3RXY619wpctYJU8IbQ"> 
              <img className="social-media" srcSet={iconYoutube} alt=""/>  
          </Link>
        </span>
  </div>
  <div className="ads-div"> 
    <span> <img className="ads-log" src={logo} alt=""/> </span> 
    <span>  <h1 className="ads-text ads-text-1"> ADS </h1></span> 
    <span>  <h1 className="ads-text ads-text-2"> ADS </h1></span> 
  </div>
  <span> 
      <a target="_blank" href="https://api.whatsapp.com/message/JVU7KU5D3563D1?autoload=1&app_absent=0">
          <img className="icon-chat" src={iconChat} alt=""/> 
      </a>  
  </span>

  <div className="container"> 
      <span id="typepc-text" title="typepc-text" className="typepc-text"> QUE TIPO DE PC VOCÊ PROCURA? </span>
      <span className="textTypePc-1 "> <a href="#"> NESTPC GAMER </a> </span>
      <span className="textTypePc-2 "> <a href="#"> NESTPC OFFICE PREMIUM </a> </span>
      <span className="textTypePc-3 "> <a href="#"> NESTPC OFFICE </a> </span>
      <img className="img-typepc-1" srcSet={typepc1} alt=""/>
      <img className="img-typepc-2" srcSet={typepc2} alt=""/>
      <img className="img-typepc-3" srcSet={typepc3} alt=""/>
  </div>
     
  <div className="container-2" title="container-2" >
      
      <div id="hl" title="highlights" className="hl-text"> src={starIcon} DESTAQUES </div>

      <span> <img className="favoriteIcon favoriteIcon-hl-1" srcSet={iconFavorites} src="../assets/icons/favorite-icon.png" alt=""/> </span> 
      <span> <img className="favoriteIcon favoriteIcon-hl-2" srcSet={iconFavorites} src="../assets/icons/favorite-icon.png" alt=""/> </span> 
      <span> <img className="favoriteIcon favoriteIcon-hl-3" srcSet={iconFavorites} src="../assets/icons/favorite-icon.png" alt=""/> </span> 
      
      <div className="hl-1 styleBox"> 
          <img className="img-hl-1" srcSet={gab1} src="../assets/gabinetes/gab1.png" alt=""/>  
      </div>
      <div className="hl-2 styleBox">
          <img className="img-hl-2" srcSet={gab2} src="../assets/gabinetes/gab2.png" alt=""/>
      </div>
      <div className="hl-3 styleBox"> 
          <img className="img-hl-3" srcSet={gab3} src="../assets/gabinetes/gab3.png" alt=""/>  
      </div>

      <div className="desc-hl-1"> 
          <div>
              <span className="oldPrice-hl-1 oldPrice-hl"> DE R$2.999,00 POR: </span>
              <span className=" currentPrice-hl-1 currentPrice-hl"> R$2.599,00 </span>
              <span className=" installmentPrice-hl-1 installmentPrice-hl "> OU 12X DE R$280,00 </span>   
          </div>
      </div>

      <div className="desc-hl-2"> 
          <div>
              <span className="oldPrice-hl-2 oldPrice-hl"> DE R$2.999,00 POR: </span>
              <span className=" currentPrice-hl-2 currentPrice-hl"> R$2.599,00 </span>
              <span className=" installmentPrice-hl-2 installmentPrice-hl "> OU 12X DE R$280,00 </span>   
          </div> 
      </div>
        <div className="desc-hl-3">  
          <div>
              <span className="oldPrice-hl-3 oldPrice-hl"> DE R$2.999,00 POR: </span>
              <span className=" currentPrice-hl-3 currentPrice-hl"> R$2.599,00 </span>
              <span className=" installmentPrice-hl-3 installmentPrice-hl "> OU 12X DE R$280,00 </span>   
          </div>
        </div>

        <button className="button-buy"> <img className="buy-hl buy-hl-1" srcSet={iconBuy} src="../assets/icons/icon-comprar.png" alt=""/> </button>
        <button className="button-buy"> <img className="buy-hl buy-hl-2" srcSet={iconBuy} src="../assets/icons/icon-comprar.png" alt=""/> </button>
        <button className="button-buy"> <img className="buy-hl buy-hl-3" srcSet={iconBuy} src="../assets/icons/icon-comprar.png" alt=""/> </button>

        <div className="text-buy-by-platform"> COMPRE POR PLATAFORMA </div>
        <span className="text-platform-intel"> INTEL </span>
        <span className="text-platform-amd"> AMD </span>
        <span > <img className="platform-intel" srcSet={imgIntelType} src="../assets/icons/img-intel-processor.png" alt=""/> </span>
        <span > <img className="platform-amd" srcSet={imgAmdType} src="../assets/icons/img-amd-processor.png" alt=""/> </span>
  </div>
  <div className="container-3" id="container-3" title="container-3"> 
  <div className="bs-text">⚡MAIS VENDIDOS </div>

  <span> <img className="favoriteIcon favoriteIcon-bs-1" srcSet={iconFavorites} src="../assets/icons/favorite-icon.png" alt=""/> </span> 
  <span> <img className="favoriteIcon favoriteIcon-bs-2" srcSet={iconFavorites} src="../assets/icons/favorite-icon.png" alt=""/> </span> 
  <span> <img className="favoriteIcon favoriteIcon-bs-3" srcSet={iconFavorites} src="../assets/icons/favorite-icon.png" alt=""/> </span> 
    
  <div className="bs-1 styleBox">  <img className="img-bs-1" srcSet={gab1} src="../assets/gabinetes/gab1.png" alt=""/> </div>
  <div className="bs-2 styleBox">  <img className="img-bs-2" srcSet={gab2} src="../assets/gabinetes/gab2.png" alt=""/> </div>
  <div className="bs-3 styleBox">  <img className="img-bs-3" srcSet={gab3} src="../assets/gabinetes/gab3.png" alt=""/> </div>

  <div className="desc-bs-1"> 
      <div>
          <span className=" oldPrice-bs-1 oldPrice"> DE R$2.999,00 POR: </span>
          <span className=" currentPrice-bs-1 currentPrice"> R$2.599,00 </span>
          <span className=" installmentPrice-bs-1 installmentPrice "> OU 12X DE R$280,00 </span>   
      </div>
  </div>
  <div className="desc-bs-2"> 
      <div>
          <span className=" oldPrice-bs-2 oldPrice"> DE R$2.999,00 POR: </span>
          <span className=" currentPrice-bs-2 currentPrice"> R$2.599,00 </span>
          <span className=" installmentPrice-bs-2 installmentPrice "> OU 12X DE R$280,00 </span>   
      </div>
  </div>
  <div className="desc-bs-3"> 
      <div>
          <span className=" oldPrice-bs-3 oldPrice"> DE R$2.999,00 POR: </span>
          <span className=" currentPrice-bs-3 currentPrice"> R$2.599,00 </span>
          <span className=" installmentPrice-bs-3 installmentPrice "> OU 12X DE R$280,00 </span>   
      </div>
  </div>

  <button className="button-buy"> <img className="buy-bs buy-bs-1" srcSet={iconBuy} src="../assets/icons/icon-comprar.png" alt=""/> </button>
  <button className="button-buy"> <img className="buy-bs buy-bs-2" srcSet={iconBuy} src="../assets/icons/icon-comprar.png" alt=""/> </button>
  <button className="button-buy"> <img className="buy-bs buy-bs-3" srcSet={iconBuy} src="../assets/icons/icon-comprar.png" alt=""/> </button>
</div>
    <div className="d-text"> 🗄DEPARTAMENTOS </div> 

    <div className="bbd-1 styleBox-bbd">
        <span className="bbd-text bbd-text-1"> PCS COMPLETOS </span>
    </div>
    <img className="img-bbd-1" srcSet={imgBbdPc} src="../assets/pcs.png" alt=""/> 

    <div className="bbd-2 styleBox-bbd"> 
        <span className="bbd-text bbd-text-2"> MONITORES </span>  
    </div>
    <img  className="img-bbd-2" srcSet={imgBbdMonitor} src="../assets/monitores.png" alt=""/> 

    <div className="bbd-3 styleBox-bbd"> 
        <span className="bbd-text bbd-text-3"> PERIFERICOS </span> 
    </div>
        <img className="img-bbd-3" srcSet={imgBbdPeripherals} src="../assets/perifericos.png" alt=""/> 

    <div className="bbd-4 styleBox-bbd"> 
        <span className="bbd-text bbd-text-4"> HARDWARE </span> 
    </div>
        <img className="img-bbd-4" srcSet={imgBbdHardware} src="../assets/hardware.png" alt=""/> 

        <span className="textLine2">CONTATOS E REDES SOCIAIS:</span>
        <div className="line-2">
        <span>
        <Link href="https://www.facebook.com/nestinformatica/"> 
                <img id="iconFacebook" className="social-media" srcSet={iconFacebook} alt=""/>
            </Link>
        </span> 
        <span> 
          <Link href="#"> 
            <img className="social-media" srcSet={iconGmail} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="https://www.instagram.com/nestinformatica/"> 
            <img className="social-media" srcSet={iconInstagram}  alt=""/> 
          </Link>
        </span>
        <span> 
          <Link  href="https://www.linkedin.com/company/nestinformatica/"> 
            <img className="social-media" srcSet={iconLinkedin} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="#"> 
           <img className="social-media" srcSet={iconTelegram} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="#"> 
            <img className="social-media" srcSet={iconWhatsapp} alt=""/> 
          </Link>
        </span>
        <span> 
          <Link href="https://www.youtube.com/channel/UCBH2a3RXY619wpctYJU8IbQ"> 
              <img className="social-media" srcSet={iconYoutube} alt=""/>  
          </Link>
        </span>
    </div>
  </>
)
}

export { Header}