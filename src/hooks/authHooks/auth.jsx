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

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

    }catch(error) {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut() {    
    localStorage.removeItem("@rocketnotes:token")
    localStorage.removeItem("@rocketnotes:user")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try{
      if(avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        
        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data
      }else {
        user.avatar = data.user.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      setData({ user, token: data.token})
      alert("Perfil atualizado!")

    }catch(error){
      console.log(error)
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível atualizar o usuário.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user")
    const token = localStorage.getItem("@rocketnotes:token")
    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user: JSON.parse(user), token })
    }
  }, [])


  return(
    <AuthContext.Provider value={ { signIn, signOut, updateProfile ,user:data.user } }>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }