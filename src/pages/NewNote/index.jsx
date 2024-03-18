import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

import { Link } from 'react-router-dom'

import { Container, Form, NoteInfo } from "./styles"

export function NewNote() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Crair nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <NoteInfo>
            <Input placeholder="Título" />
            <Textarea placeholder="Observações" />
          </NoteInfo>

          <Section title="Links úteis">
            <NoteItem value="https://github.com" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <Button title="Salvar" />

        </Form>
      </main>
    </Container>

  );
}