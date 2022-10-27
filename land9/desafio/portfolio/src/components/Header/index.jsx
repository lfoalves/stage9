import { Link } from "react-router-dom";
import { AncoraGradient } from "../AncoraGradient";
import { Container } from "./styles";

export function Header() {

  const links = [
    {
      link: 'About',
      route: '/about'
    },
    {
      link: 'Projects',
      route: '/projects'
    },
    {
      link: 'Techs',
      route: '/techs'
    },
    {
      link: 'Contact',
      route: '/contact'
    }
  ]
  
  return (
    <Container>
      <div className="container">
        <Link to={'/'}>Home</Link>

        <nav>
          <ul>
            {
              links.map(item => (
                <li key={item.link}>
                  <AncoraGradient data={item} />
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </Container>
  );
}