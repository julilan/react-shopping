import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import logo from '../img/logo.png';

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar bg='dark' data-bs-theme='dark' className='justify-content-center'>
      <Navbar.Brand href='/'>
        <img
          src={logo}
          alt='logo'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Fit Vista
      </Navbar.Brand>
      <Nav activeKey={location.pathname}>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/products'>Products</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
