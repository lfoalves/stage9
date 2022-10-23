import { Container, Form } from "./styles";

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { GoBack } from '../../components/GoBack'
import { Input } from "../../components/Input";
import { Textarea } from '../../components/Textarea'
import { NoteItem } from "../../components/NoteItem";

export function New() {
  return(
    <Container>

      <Header />
      
      <main>
        <Section title={'Novo Filme'}>
          <div>
          <GoBack />

          <Form>
            <div className="flex">
              <Input
                placeholder={'Título'}
                required
              />

              <Input
                placeholder={'Sua nota de (0 a 5)'}
                type={'number'}
                min={'0'}
                max={'5'}
                required
              />
            </div>

            <Textarea
              placeholder={'Observações'}
              required
            />

          </Form>
          </div>
        </Section>

        <Section title={'Marcadores'}>
          <div className="tags">
            <NoteItem value={'Animação'} />
            <NoteItem value={'Aventura'} />
            <NoteItem value={'Aventura'} isNew/>
          </div>
        </Section>
      </main>
      
    </Container>
  );
}