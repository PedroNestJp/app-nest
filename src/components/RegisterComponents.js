import React from 'react'
import '../pages/register/Register'
import RegisterCss from '../pages/register/Register.css'

const RegisterComponents = () =>{
return(

    <main className="main">
        <div className="content">
            <h1 className="title"> CRIAR MINHA CONTA </h1>
            <div className="typePerson"> </div>
            <div className="typePerson1"> PESSOA FÍSICA</div>
            <input className="circle-typePerson1" type="radio" checked/>
            <a className="link-person1" href="./register"></a>
            <div className="typePerson2"> PESSOA JURÍDICA 
        </div>
        <input className="circle-typePerson2" type="radio"/>
        <a className="link-person2" href="./register" ></a>
            <div> <input className="inputs input-name" placeholder="Nome completo*:" type="text" name="name" id="name"/> </div>
            <div> <input className="inputs input-cpf" placeholder="CPF*:" type="number" name="cpf" id="cpf"/> </div>
            <div> <input className="inputs input-birthDate" placeholder="Data de Nascimento*:" type="date" name="cpf" id="cpf"/></div>
            <div> <input className="inputs input-tell" placeholder="Celular*:" type="number" name="tell" id="tell"/></div>
            <div> <input className="input input-email" placeholder="E-mail*:" type="text" name="text" id="text"/></div>
            <div> <input className="inputs input-password" placeholder="Senha*:" type="password" name="password" id="password"/></div>
            <div> 
                    <input className="inputs input-repeatPassword" placeholder="Repetir Senha*:" 
                        type="password" name="repeatPassword" id="repeatPassword"/>
                <button className="eye-off" tabindex="-1" > </button>
                    <img className="img-eye-input-password"  src="../assets/icons/icon-eye-off.png" alt=""/> 
            </div>
       

    <h2 className="required-field" > (*) Campos obrigatórios </h2>
    <h2 className="accept-terms-1"> Quero receber ofertas e novidades por e-mail, SMS ou WhatsApp </h2>
    <input className='acceptTermsInput1' type="checkbox"/> 
    <h2 className="accept-terms-2"> Li e estou de acordo com as políticas da empresa e políticas de privacidade.*  </h2>
    <input className='acceptTermsInput2'  type="checkbox" /> 
        
   


    <a href="#" target="_blank" rel="noopener noreferrer">
        <button className="creat-account" type="submit" > 
            <span className="creat-account-text"> CRIAR CONTA </span> 
        </button>
    </a>
    <div className="line">
        <span> 
            <a target="_blank" href="https://www.facebook.com/nestinformatica/"> 
                <img className="social-media" src="../assets/icons/icon-Facebook (2).png" alt=""/> 
            </a>
        </span> 
        <span> <a href="#"> <img className="social-media" src="../assets/icons/icon-FacebookMessenger.png" alt=""/> </a></span>
        <span> 
            <a target="_blank" href="https://discord.com/channels/1029560957871067178/1029561065287209100"> 
                <img className="social-media" src="../assets/icons/icon-DiscordNew.png" alt=""/> 
            </a>
        </span>
        <span> <a href="#"> <img className="social-media" src="../assets/icons/icon-Gmail.png" alt=""/> </a></span>
        <span> 
            <a target="_blank" href="https://www.instagram.com/nestinformatica/"> 
                <img className="social-media" src="../assets/icons/icon-Instagram (2).png" alt=""/> 
            </a>
        </span>
        <span> 
            <a target="_blank" href="https://www.linkedin.com/company/nestinformatica/"> 
                <img className="social-media" src="../assets/icons/icon-LinkedIn.png" alt=""/> 
            </a>
        </span>
        <span> <a href="#"> <img className="social-media" src="../assets/icons/icon-Telegram App.png" alt=""/> </a></span>
        <span> <a href="#"> <img className="social-media" src="../assets/icons/icon-WhatsApp.png" alt=""/> </a></span>
        <span> 
            <a target="_blank" href="https://www.youtube.com/channel/UCBH2a3RXY619wpctYJU8IbQ"> 
                <img className="social-media" src="../assets/icons/icon-Youtube.png" alt=""/>  
            </a>
        </span>
    </div>
    <div className="footer">
        <div className="info-footer"> </div>
    </div>
    <div className="logoNestFooter" href='/home'> </div>
    
    </div>
</main>
)
}

export default RegisterComponents