import { Container } from "./styles";
import PropTypes from "prop-types";

export function Section({ title, children }) {
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
  }
  
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}