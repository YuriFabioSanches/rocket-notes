import { Container, Links, Tags, Content } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste, 
            qui sequi repudiandae voluptatum corporis. Ducimus a iusto quod hic rem 
            provident cum eligendi sit placeat maiores? Fugit, tempora sunt?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste, 
            qui sequi repudiandae voluptatum corporis. Ducimus a iusto quod hic rem 
            provident cum eligendi sit placeat maiores? Fugit, tempora sunt?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste, 
            qui sequi repudiandae voluptatum corporis. Ducimus a iusto quod hic rem 
            provident cum eligendi sit placeat maiores? Fugit, tempora sunt?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste, 
            qui sequi repudiandae voluptatum corporis. Ducimus a iusto quod hic rem 
            provident cum eligendi sit placeat maiores? Fugit, tempora sunt?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste, 
            qui sequi repudiandae voluptatum corporis. Ducimus a iusto quod hic rem 
            provident cum eligendi sit placeat maiores? Fugit, tempora sunt?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#"></a>https://www.rocketseat.com.br/</li>
              <li><a href="#"></a>https://www.rocketseat.com.br/</li>
              <li><a href="#"></a>https://www.rocketseat.com.br/</li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags>
              <li><Tag title="express" /></li>
              <li><Tag title="reactjs" /></li>
              <li><Tag title="javascript" /></li>
            </Tags>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}