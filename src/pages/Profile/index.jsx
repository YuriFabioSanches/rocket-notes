import { useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"
import { Container, Form, InputsWrapper, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import avatarPlacehodler from "../../assets/avatar_placeholder.svg"

import { useState } from 'react'
import { useAuth } from "../../hooks/authHooks/useAuth"
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlacehodler
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdate = Object.assign(user, updated)

    await updateProfile({ user: userUpdate, avatarFile })

    setPasswordOld("")
    setPasswordNew("")
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <InputsWrapper>
          <Input 
            placeholder="Nome" 
            type="text" 
            labelId="name" 
            icon={FiUser} 
            value={name}
            onChange={event => setName(event.target.value)} />

          <Input 
            placeholder="E-mail" 
            type="email" 
            labelId="email" 
            icon={FiMail}
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <Input 
            placeholder="Senha atual" 
            type="password" 
            labelId="password" 
            icon={FiLock}
            value={passwordOld}
            onChange={event => setPasswordOld(event.target.value)}
          />

          <Input 
            placeholder="Nova senha" 
            type="password" 
            labelId="newPassword" 
            icon={FiLock}
            value={passwordNew}
            onChange={event => setPasswordNew(event.target.value)}
          />
        </InputsWrapper>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>


  );
}