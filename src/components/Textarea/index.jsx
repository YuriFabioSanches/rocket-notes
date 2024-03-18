import { Container } from "./styles"
import PropTypes from 'prop-types'

export function Textarea({ value, ...rest }) {
  Textarea.propTypes = {
    value: PropTypes.string
  }

  return(
    <Container {...rest}>
      {value}
    </Container>
  );
}