import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { api } from "../../services/api"

const AuthContext = createContext({});

function AuthProvider({ children }) {
  AuthProvider.propTypes = {
    children: PropTypes.node
  }

  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try{
      const response = await api.post("/sessions", {email, password});

      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.authorizaton = `Bearer ${token}`
      setData({ user, token })

    }catch(error) {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível entrar.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user")
    const token = localStorage.getItem("@rocketnotes:token")
    if(user && token) {
      api.defaults.headers.authorizaton = `Bearer ${token}`
      setData({ user: JSON.parse(user), token })
    }
  }, [])


  return(
    <AuthContext.Provider value={ { signIn, user:data.user } }>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }