// import { Container } from './styles'

import { ContainerContent } from '../../components/ContainerContent';
import { SectionProjects } from '../../components/SectionProjects';

export function Projects() {

  return (
    // <Container>
    //   <div className="container">
    //     <SectionProjects />
    //   </div>
    // </Container>

    <ContainerContent>
      <SectionProjects />
    </ContainerContent>
  );
}