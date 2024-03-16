import { Container } from "./styles";
import PropTypes from 'prop-types'

export function Input({ icon: Icon, ...rest }) {
  Input.propTypes = {
    icon: PropTypes.element
  }

  return(
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
}