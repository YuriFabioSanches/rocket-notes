import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"

import { Container, Form, NoteInfo } from "./styles"

export function NewNote() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Crair nota</h1>
            <a href="/">Voltar</a>
          </header>

          <NoteInfo>
            <Input placeholder="Título" />
            <Textarea placeholder="Observações" />
          </NoteInfo>

        </Form>
      </main>
    </Container>

  );
}