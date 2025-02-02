import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = ({city}: {city: string}) => {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="d-flex ">
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2 gap-lg-3">
          <img
            height="64"
            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png"
          />
          <h1 className="mb-0">
            {capitalize(city)} tech events
            <br className="d-block d-lg-none" /> calendar {city === 'tokyo' ? '🗼' : '🥘'}
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href={`https://www.lewagon.com/${city}`} target="_blank">
              LW {capitalize(city)}
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
