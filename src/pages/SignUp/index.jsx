import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Title, LoginTitle, InputsWrapper, BackgroundImg } from "./styles"

export function SignUp() {
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
          <Input placeholder="Nome" type="text" labelId="name" icon={FiUser} />
          <Input placeholder="E-mail" type="email" labelId="email" icon={FiMail} />
          <Input placeholder="Password" type="password" labelId="password" icon={FiLock} />
        </InputsWrapper>

        <Button title="Cadastrar" />

        <a href="#">Voltar para o login</a>
      </Form>      
    </Container>
  );
}