import React from "react";
import '../pages/Login/Login'
import LoginCss from '../pages/Login/Login.css'
import logo from '../assets/logoNestHome.png'
import iconProfile from '../assets/icons/icon-profile.png'



const LoginComponent = () => {

    return(

        <div className="main">  
            <div id="loginScNavbar" className="navbar"> 
                <a href="./home" rel="noopener noreferrer">
                    <img 
                        className="logoNestHeader" 
                        id="logoNestHeaderLoginSc" 
                        title="logoNestHeader"  
                        alt="logoNestHeader" 
                        src={logo}
                        
                    />
                </a>
                <span> 
                    <a href="./myAccount.html">
                        <img 
                            className="icon-profile" 
                            srcSet={iconProfile}
                            src="../assets/icons/icon-profile.png" 
                            alt=""/> 
                    </a>
                </span>
                <span id="loginScTextProfile" className="textProfile">
                            Faça seu
                    <a id="loginScLinkLogin" title="link-login-header" className="linkLogin" href="/login">
                            LOGIN
                    </a>
                            ou
                    <a id="loginScLinkRegister" title="link-cadastre-se" className="linkCadastre-se" href="/register">
                            CADASTRE-SE
                    </a>
                </span>
            </div>

                <div className="main-container"> </div>
                <div id="loginScTitle" className="title">  FAZER LOGIN  </div>
                <input 
                    className="email" 
                    placeholder="E- mail, CPF ou CNPJ" 
                    type="email"/>
                <input id="loginScInput" className="senha" placeholder="Senha" type="password"/>
                <a href="/home" rel="noopener noreferrer">
                    <button 
                            className="login" 
                            type="submit"> 
                        <span 
                            className="login-text"> ENTRAR 
                        </span> 
                    </button>
                </a>
                <span className="span1">Esqueceu a senha?</span>
                <span className="span2"> QUERO ACESSAR COM MINHAS REDES SOCIAIS </span>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <button className="login-fb"> 
                        <span className="fb-text"> Facebook </span> 
                    </button>
                </a>    
                <a href="https://accounts.google.com/v3/signin/identifier?dsh=S722111738%3A1665814673109566&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWqFRhC9qnoWQvCfYnofNkkE0iIDHSo0K-hHsggThToSlYXyMH6pwF3TOFZzkS5X381Kl9Kt" target="_blank" rel="noopener noreferrer">
                    <button className="login-gg"> 
                        <span className="gg-text"> Google </span> 
                    </button>
                </a>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="span3"> ou </span>
                <span className="span4"> Não tem cadastro ?</span>
                <a href="/registrationSc" rel="noopener noreferrer">
                    <button className="register" > 
                        <span className="register-text"> CADASTRE-SE </span> 
                    </button>
                </a> 
            
        </div>

    )
}

export default LoginComponent