import { Container, Links, Tags, Content } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"

import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function hadleDeleteNote() {
    const confirm = window.confirm("Deseja excluir a nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function handleNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    handleNote()
  }, [params.id])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText 
              title="Excluir nota"
              onClick={hadleDeleteNote}
            />

            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={link.id}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>

            }

            {
              data.tags &&
              <Section title="Marcadores">
              <Tags>
                {
                  data.tags.map(tag => (
                    <li key={tag.id}>
                      <Tag 
                        title={tag.name}
                      />
                    </li>
                  ))
                }
              </Tags>
            </Section>
            }

            <Button 
              title="Voltar"
              onClick={handleBack}
            />
          </Content>
        </main>
      }

    </Container>
  )
}