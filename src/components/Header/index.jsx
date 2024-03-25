import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/authHooks/useAuth"
import { api } from '../../services/api'
import avatarPlacehodler from "../../assets/avatar_placeholder.svg"

export function Header() {
  const { user, signOut } = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlacehodler

  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt={user.name} />

        <div>
          <span>Bem vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}