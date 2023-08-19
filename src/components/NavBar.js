import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar bg='dark' data-bs-theme='dark' className='justify-content-center'>
      <Navbar.Brand href='/'>Fit Vista</Navbar.Brand>
      <Nav activeKey={location.pathname}>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/products'>Products</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
