import React, { useState } from 'react';
import * as Yup from 'yup';
import { Button, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { Input } from '@rocketseat/unform';

import { Login } from '../../../services/api';
import history from '../../../services/history';
import { Container, LoginBox, FormLogin } from './LoginStyles';
import Logo from '../../../files/images/clina-logo.svg';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  function handleSubmit(data: any): void {
    const { email, password } = data;
    setLoading(true);
    const loginResult = Login(email, password);

    setTimeout(() => {
      if(loginResult !== "Error") {
        localStorage.setItem('jwtToken', loginResult);
        toast.success('Login sucedido!');
        setLoading(false);
        history.push('/');
  
      } else {
        toast.error('Usuário e/ou senha inválidos.');
        setLoading(false)
      }
    }, 2000);
  }

  function onInputFocus(type: string): void {
    if (type === 'email') {
      setEmailFocus(true);
    } else {
      setPasswordFocus(true);
    }
  }
  function onInputBlur(type: string): void {
    if (type === 'email' && !emailValue) {
      setEmailFocus(false);
    }
    if (type === 'password' && !passwordValue) {
      setPasswordFocus(false);
    }
  }

  return (
    <Container>
      <LoginBox>
        <img src={Logo} alt="Logo"/>
        <h2>Bem-vindo de volta!</h2>

        <FormLogin onSubmit={handleSubmit} schema={schema}>
          <h5>Endereço de e-mail</h5>
          <Input
            name="email"
            type="email"
            onFocus={() => onInputFocus('email')}
            onBlur={() => onInputBlur('email')}
            placeholder="Digite seu e-mail"
            autoFocus
            spellCheck={false}
            onChange={(e: any) => setEmailValue(e.target.value)}
            className={`${emailFocus ? 'focus' : ''}`}
          />
          <h5 style={{ marginTop: '10px' }}>Senha</h5>
          <Input
            onFocus={() => onInputFocus('password')}
            onBlur={() => onInputBlur('password')}
            name="password"
            type="password"
            onChange={(e: any) => setPasswordValue(e.target.value)}
            className={`${passwordFocus ? 'focus' : ''}`}
          />
          <Button
            className="submitButton"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!!loading}
          >
            {loading ? <CircularProgress color="primary" size={24} /> : 'Entrar'}
          </Button>
          <a href="/">Esqueci minha senha</a>
        </FormLogin>
      </LoginBox>
      <div className="sign-up">
        <span>Novo na plataforma? <a href="/">Cadastre-se</a></span>
      </div>
    </Container>
  );
}
