import { Link } from 'react-router-dom'
import { FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form, Title, LoginTitle, InputsWrapper, BackgroundImg } from "./styles"

import { useAuth } from '../../hooks/authHooks/useAuth.js'
import { useState } from "react"


export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
  
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
          <Input 
            placeholder="E-mail" 
            type="email" 
            labelId="email" 
            icon={FiMail}
            onChange={event => setEmail(event.target.value)} />
          <Input 
            placeholder="Password" 
            type="password" 
            labelId="password" 
            icon={FiLock}
            onChange={event => setPassword(event.target.value)} />
        </InputsWrapper>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>
      
      <BackgroundImg />
    </Container>
  );
}