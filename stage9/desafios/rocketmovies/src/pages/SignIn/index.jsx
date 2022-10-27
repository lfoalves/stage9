import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          type={'email'}
          placeholder={'E-mail'}
          icon={FiMail}
        />
        <Input
          type={'password'}
          placeholder={'Senha'}
          icon={FiLock}
        />

        <Button title={'Entrar'} type={'submit'} />

        <Link to={'/signup'}>
          Criar conta
        </Link>
      </Form>

      <Background />

    </Container>
  );
}