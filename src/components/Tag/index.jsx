import { Container } from "./styles";
import PropTypes from "prop-types"

export function Tag({ title, ...rest}) {
  Tag.propTypes = {
    title: PropTypes.string.isRequired
  }
  
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}