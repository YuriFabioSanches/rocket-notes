import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img src="https://github.com/YuriFabioSanches.png" alt="User image" />

        <div>
          <span>Bem vindo</span>
          <strong>Yuri Fabio Sanches</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}