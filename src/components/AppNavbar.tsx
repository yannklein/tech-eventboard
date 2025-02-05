import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { capitalize } from '../utils';
import tokyoTower from '../assets/tokyo-tower.svg';
import sagradaFamilia from '../assets/sagrada-familia.png';

const cityEmoji: Record<string, string> = {
  tokyo: tokyoTower,
  barcelona: sagradaFamilia
}

const AppNavbar = ({city}: {city: string}) => {
  const capitalizedCity = capitalize(city);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="d-flex ">
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2 gap-lg-3">
          <img
            height="64"
            src={cityEmoji[city] || tokyoTower}
            alt={`${capitalizedCity} logo`}
          />
          <h1 className="mb-0">
            {capitalizedCity} tech events
            <br className="d-block d-lg-none" /> calendar
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href={`https://www.lewagon.com/${city}`} target="_blank">
              LW {capitalizedCity}
            </Nav.Link>
            <Nav.Link href="https://yannklein.dev/" target="_blank">
              About Yann
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
