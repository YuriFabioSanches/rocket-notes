import { Container } from "./styles";
import PropTypes from 'prop-types';

export function ButtonText({ title, isActive = false,  ...rest }) {
  ButtonText.propTypes = {
    title: PropTypes.string,
    isActive: PropTypes.bool
  }

  return(
    <Container
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      {title}
    </Container>
  );
}