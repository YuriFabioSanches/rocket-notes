import { Link } from 'react-router-dom'

import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from '../../hooks/authHooks/useAuth.js'

import { Container, Form, Title, LoginTitle, InputsWrapper, BackgroundImg } from "./styles"

export function SignIn() {
  const value = useAuth()
  console.log(value)
  return(
    <Container>
      <Form>
        <Title>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        </Title>

        <LoginTitle>
          <h2>Faça seu login</h2>
        </LoginTitle>

        <InputsWrapper>
          <Input placeholder="E-mail" type="email" labelId="email" icon={FiMail} />
          <Input placeholder="Password" type="password" labelId="password" icon={FiLock} />
        </InputsWrapper>

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>
      
      <BackgroundImg />
    </Container>
  );
}