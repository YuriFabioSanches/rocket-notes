import { createContext} from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext({});

function AuthProvider({ children }) {
  AuthProvider.propTypes = {
    children: PropTypes.node
  }

  return(
    <AuthContext.Provider value={{name: "Yuri", email: "yuri@email.com"}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }