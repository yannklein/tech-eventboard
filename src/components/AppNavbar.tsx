import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="d-flex justify-content-between flex-nowrap">
        <Navbar.Brand href="#" className="d-flex align-items-center gap-3">
          <img
            height="64"
            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png"
          />
          <h1 className="mb-0">Tokyo tech events<br className='d-block d-lg-none' /> calendar 🗼</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="https://www.lewagon.com/tokyo" target="_blank">LW Tokyo</Nav.Link>
            <Nav.Link href="https://yannklein.dev/" target="_blank">About Yann</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
