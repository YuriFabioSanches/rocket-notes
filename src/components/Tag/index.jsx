import { Container } from "./styles";
import PropTypes from "prop-types"

export function Tag({ title }) {
  Tag.propTypes = {
    title: PropTypes.string.isRequired
  }
  
  return(
    <Container>
      {title}
    </Container>
  )
}