import { RegisterContainer } from 'components/RegisterContainer'
import AlokamonA from '../../assets/images/alokamon_A.png'
import './RegisterPage.css'
import React, { useState } from 'react';
import { Button } from 'components/Button';

const BirthdayBox = () => {
  const [birthday, setBirthday] = useState('');

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedBirthday = event.target.value.replace(/[^0-9/]/g, ''); // Only allow numbers and '/'
    if (formattedBirthday.length === 2 || formattedBirthday.length === 5) {
      formattedBirthday += '/';
    }
    if (formattedBirthday.length <= 10) {
      setBirthday(formattedBirthday);
    }
  };

  const handleBirthdayKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && event.currentTarget.selectionStart && event.currentTarget.value[event.currentTarget.selectionStart - 1] === '/') {
      event.preventDefault();
      setBirthday(birthday.slice(0, birthday.length - 2));
    }
  };

  return (
    <div className = 'formSidebySide' style={{ marginLeft: '2%', width: '50%' }}>
      <label htmlFor="birthday"></label>
      <input className='inputRegisterPage'
        type="text"
        id="birthday"
        placeholder=" Data de nascimento (dd/mm/yyyy)"
        style={{ width: '100%', height: '50px' }}
        pattern="\d{2}\/\d{2}\/\d{4}"
        value={birthday}
        onChange={handleBirthdayChange}
        onKeyDown={handleBirthdayKeyDown}
        maxLength={10}
      />
    </div>
  );
};


const CPFBox = () => {
  const [cpf, setCPF] = useState('');

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedCPF = event.target.value.replace(/[^0-9.-]/g, ''); // Only allow numbers, '.' and '-'
    if (formattedCPF.length === 3 || formattedCPF.length === 7) {
      formattedCPF += '.';
    } else if (formattedCPF.length === 11) {
      formattedCPF += '-';
    }
    if (formattedCPF.length <= 14) {
      setCPF(formattedCPF);
    }
  };

  const handleCPFKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Backspace' &&
      event.currentTarget.selectionStart &&
      (event.currentTarget.value[event.currentTarget.selectionStart - 1] === '.' ||
        event.currentTarget.value[event.currentTarget.selectionStart - 1] === '-')
    ) {
      event.preventDefault();
      setCPF(cpf.slice(0, cpf.length - 2));
    }
  };
  return (
    <div className='formSidebySide' style={{ marginRight: '2%', width: '50%' }}>
      <label htmlFor="CPF"></label>
      <input
        className='inputRegisterPage'
        type="text"
        id="CPF"
        placeholder=" CPF"
        style={{ width: '100%', height: '50px' }}
        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
        value={cpf}
        onChange={handleCPFChange}
        onKeyDown={handleCPFKeyDown}
        maxLength={14}
      />
    </div>
  );
};

const PasswordBox = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      <div className = 'formSidebySide' style={{ marginRight: '2%', width: '50%' }}>
        <label htmlFor="password"></label>
        <input className='inputRegisterPage'
          type="password"
          id="password"
          placeholder= " Senha"
          style={{ width: '100%', height: '50px' }}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className = 'formSidebySide' style={{ marginLeft: '2%', width: '50%' }}>
        <label htmlFor="confirmPassword"></label>
        <input className='inputRegisterPage'
          type="password"
          id="confirmPassword"
          placeholder=" Confirmar senha"
          style={{ width: '100%', height: '50px' }}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
    </>
  );
};

const RegisterText = () => {

  return(
    <>
      <div className='mainContainer'>
        <div className='topContainer'>
          Cadastre-se
        </div>
        <div className='formContainer'>
          <div className='formLine'>
            <input className='inputRegisterPage' type="text" id="name" placeholder=" Nome completo" style={{ width: '100%', height: '50px' }} />
          </div>
          <div className='formLine'>
            <CPFBox />
            <BirthdayBox />
          </div>
          <div className='formLine'>
            <input className = 'inputRegisterPage' type="email" id="email" placeholder=" E-mail" style={{ width: '100%', height: '50px' }} />
          </div>
          <div className='formLine'>
            <PasswordBox />
          </div>
        </div>
        <div className='buttonStyle'>
          <Button
            onClick={() => console.log("Cadastro realizado")}
            ButtonText='Cadastrar'/>
        </div>
      </div>
    </>
  )
}

const RegisterLogo = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '20px'
      }}
    >
      <img src={AlokamonA} alt="Logo" style={{ width: '75%' }} />
    </div>
  )
}

export const RegisterPage = () => {
  return (
    <RegisterContainer
      Component1={<RegisterLogo />}
      Component2={<RegisterText />}
    />
  )
}
