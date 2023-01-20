import React from 'react'
import '../pages/register/Register'
import RegisterCss from '../pages/register/Register.css'

const RegisterComponents = () =>{
return(

<main className="main">

    <div className="content">

        <h1 className="title"> CRIAR CONTA </h1>

        <div className='typePerson'>
            <div className="physicalPerson"> PESSOA FÍSICA</div>
                <input id='circlePPerson' className="circlePPerson" type="radio" checked/>
            <div className="legalPerson"> PESSOA JURÍDICA</div>
                <input id='circleLegalPerson' className="circleLegalPerson" type="radio" />
        </div>

        <section className='inputs'>
                <input className="input-name inputsRegister" placeholder="Nome completo*:" type="text" name="name" id="name"/>
                <input className="input-cpf inputsRegister" placeholder="CPF*:" type="number" name="cpf" id="cpf"/>
                <input className="input-birthDate inputsRegister" placeholder="Data de Nascimento*:" type="date" name="cpf" id="cpf"/>
                <input className="input-tell inputsRegister" placeholder="Celular*:" type="number" name="tell" id="tell"/>
                <input className="input-email inputsRegister" placeholder="E-mail*:" type="text" name="text" id="text"/>
                <input className="input-password inputsRegister" placeholder="Senha*:" type="password" name="password" id="password"/>
                <input className="input-repeatPassword inputsRegister" placeholder="Repetir Senha*:" type="password" name="repeatPassword" id="repeatPassword"/>
        </section>

        <select className='selection'>
            <option value='escolha'> escolha </option>
        </select>
       

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