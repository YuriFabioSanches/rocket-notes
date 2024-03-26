import { Container, Form, NoteInfo } from "./styles"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"


import { useNavigate } from 'react-router-dom'

import { useState } from "react"

import { api } from "../../services/api"

export function NewNote() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddLinks() {
    if(newLink != "") {
      setLinks(prevState => [...prevState, newLink])
      setNewLink("")
    }
  }

  function handleRemoveLink(linkIndex) {
    setLinks(prevState => prevState.filter((_, index) => index !== linkIndex))
  }

  function handleAddTags(){
    if(newTag != "") {
      setTags(prevState => [...prevState, newTag])
      setNewTag("")
    }
  }

  function handleRemoveTag(tagIndex) {
    setTags(prevState => prevState.filter((_, index) => index !== tagIndex))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota.")
    }

    if(newLink){
      return alert("Você inseriu um link no campo, mas não adicionou.")
    }

    if(newTag){
      return alert("Você inseriu uma tag no campo, mas não adicionou.")
    }

    await api.post("/notes", {title, description, tags, links})

    alert("Nota criada com sucesso!")
    
    navigate(-1)
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Crair nota</h1>
            <ButtonText 
              title="Voltar" 
              onClick={handleBack}
            />
          </header>

          <NoteInfo>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
          </NoteInfo>

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
              key={index}
              value={link}
              onClick={() => handleRemoveLink(index)}
            />
            ))}
            <NoteItem 
              isNew  
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLinks}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem 
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(index)} 
                />
              ))}
              <NoteItem 
                isNew 
                placeholder="Novo marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTags} 
              />
            </div>
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>

  );
}