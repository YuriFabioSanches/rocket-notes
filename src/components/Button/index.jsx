import { Container } from "./styles";
import PropTypes from "prop-types"

export function Button({ title, loading = false, ...rest}) {
  Button.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool
  }
  
  return(
    <Container 
      type="button"
      disabled = {loading}
      {...rest}
    >
      {loading ? "Carregando..." : title}
    </Container>
  )
}