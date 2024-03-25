import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/authHooks/useAuth"

export function Header() {
  const { signOut } = useAuth()
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/YuriFabioSanches.png" alt="User image" />

        <div>
          <span>Bem vindo</span>
          <strong>Yuri Fabio Sanches</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}