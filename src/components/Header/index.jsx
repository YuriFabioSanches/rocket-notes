import avatarPlacehodler from "../../assets/avatar_placeholder.svg"
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri"
import { api } from '../../services/api'

import { useAuth } from "../../hooks/authHooks/useAuth"
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlacehodler

  function handleSignOut(){
    navigate("/")
    signOut()
  }
  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt={user.name} />

        <div>
          <span>Bem vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}