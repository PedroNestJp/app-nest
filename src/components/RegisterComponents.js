import React from 'react'
import '../pages/register/Register'
import RegisterCss from '../pages/register/Register.css'

const RegisterComponents = () =>{
return(

<main className="main">
    <div className="content">
        <h1 className="title"> CRIAR MINHA CONTA </h1>
        <div className='typePerson'>
            <div className="physicalPerson"> PESSOA FÍSICA</div>
                <input className="circlePPerson" type="radio" checked/>
                <a className="linkPPerson" href="./register"></a>
            <div className="legalPerson"> PESSOA JURÍDICA</div>
                <input className="circleLegalPerson" type="radio" />
                <a className="linkLPerson" href="./register" ></a>
        </div>
    
        <section className='inputs'>
            
                <input className="input-name" placeholder="Nome completo*:" type="text" name="name" id="name"/>
                <input className="input-cpf" placeholder="CPF*:" type="number" name="cpf" id="cpf"/>
                <input className="input-birthDate" placeholder="Data de Nascimento*:" type="date" name="cpf" id="cpf"/>
                <input className="input-tell" placeholder="Celular*:" type="number" name="tell" id="tell"/>
                <input className="input-email" placeholder="E-mail*:" type="text" name="text" id="text"/>
                <input className="input-password" placeholder="Senha*:" type="password" name="password" id="password"/>
                <input className="input-repeatPassword" placeholder="Repetir Senha*:" type="password" name="repeatPassword" id="repeatPassword"/>
            
        </section>
       

            {/* <h2 className="required-field" > (*) Campos obrigatórios </h2>
            <h2 className="accept-terms-1"> Quero receber ofertas e novidades por e-mail, SMS ou WhatsApp </h2>
            <input className='acceptTermsInput1' type="checkbox"/> 
            <h2 className="accept-terms-2"> Li e estou de acordo com as políticas da empresa e políticas de privacidade.*  </h2>
            <input className='acceptTermsInput2'  type="checkbox" /> 
        
   


        <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="creat-account" type="submit" > 
                <span className="creat-account-text"> CRIAR CONTA </span> 
            </button>
        </a>

        <div className="footer">
            <div className="info-footer"> </div>
        </div>
        <div className="logoNestFooter" href='/home'> </div> */}
    </div>
</main>
)
}

export default RegisterComponents