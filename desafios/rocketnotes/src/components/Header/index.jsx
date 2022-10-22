import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <div className="container">
        <h1>RocketMovies</h1>

        <Input
          type={'text'}
          placeholder={'Pesquisar pelo título'}
          maxlength={50}
          mixlength={5}
        />

        <Profile>
          <div>
            <strong>Luiz Fernando</strong>
            <Logout>Sair</Logout>
          </div>

          <img src="https://www.github.com/lfoalves.png" alt="Foto de Lfoalves" />
        </Profile>
      </div>
    </Container>
  );
}