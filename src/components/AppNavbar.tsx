import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { capitalize } from '../utils';
import tokyoTower from '../assets/tokyo-tower.svg';
import sagradaFamilia from '../assets/sagrada-familia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const cityEmoji: Record<string, string> = {
  tokyo: tokyoTower,
  barcelona: sagradaFamilia,
};

const AppNavbar = ({ city }: { city: string }) => {
  const capitalizedCity = capitalize(city);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="d-flex ">
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center gap-2 gap-lg-3"
        >
          <img
            height="64"
            src={cityEmoji[city] || tokyoTower}
            alt={`${capitalizedCity} logo`}
          />
          <h1 className="mb-0 fs-2 fs-lg-1">
            {capitalizedCity} tech events
            <br className="d-block d-lg-none" /> calendar
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className='d-flex flex-row gap-3 mt-3 align-items-center'>
            <div className='d-sm-none nav-link bg-secondary-subtle rounded-2 px-3 me-3'>About the author</div>
            <Nav.Link
              href="https://www.linkedin.com/in/yann-klein/"
              target="_blank"
            >
              <FontAwesomeIcon className="fs-1" icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link href="https://github.com/yannklein" target="_blank">
              <FontAwesomeIcon className="fs-1" icon={faGithub} />
            </Nav.Link>
            <Nav.Link
              href="https://yannklein.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-5"
            >
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
