import { Link, useNavigate } from 'react-router-dom'

import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

import { useState } from 'react'

import { Container, Form, Title, LoginTitle, InputsWrapper, BackgroundImg } from "./styles"

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert("Não foi possível cadastrar usuário.")
      }
    })
  }

  return(
    <Container>
      <BackgroundImg />

      <Form>
        <Title>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        </Title>

        <LoginTitle>
          <h2>Crie sua conta</h2>
        </LoginTitle>

        <InputsWrapper>
          <Input placeholder="Nome" type="text" labelId="name" icon={FiUser} onChange={e => setName(e.target.value)} />
          <Input placeholder="E-mail" type="email" labelId="email" icon={FiMail} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" labelId="password" icon={FiLock} onChange={e => setPassword(e.target.value)} />
        </InputsWrapper>

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>      
    </Container>
  );
}