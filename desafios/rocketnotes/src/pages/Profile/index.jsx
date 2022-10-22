import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import { Container, Avatar } from "./styles";

import { Input } from '../../components/Input'

export function Profile() {
  return(
    <Container>

      <header>
        <a href="#">
          <FiArrowLeft />
          <span>Voltar</span>
        </a>
      </header>

      <Avatar>
        <img src="https://www.github.com/lfoalves.png" alt="Foto do usuário" />
      </Avatar>

      <label htmlFor="avatar">
        <FiCamera />
        <input type="file" id="avatar" />
      </label>


      <Input
        type={'text'}
        placeholder={'Name'}
        icon={FiUser}
      />

      <Input
        type={'email'}
        placeholder={'E-mail'}
        icon={FiMail}
      />

      <Input
        type={'password'}
        placeholder={'Senha atual'}
        icon={FiLock}
      />

      <Input
        type={'password'}
        placeholder={'Nova senha'}
        icon={FiLock}
      />
      
    </Container>
  );
}