import { Container } from "./styles";
import { Tag } from "../Tag"
import PropTypes from 'prop-types'

export function Note( { data, ...rest }){
  Note.propTypes = {
    data: PropTypes.object
  }

  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}