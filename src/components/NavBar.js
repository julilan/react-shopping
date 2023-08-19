import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <Nav
      variant='underline'
      className='justify-content-center'
      activeKey={location.pathname}
    >
      <Nav.Item>
        <Nav.Link href='/'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/products'>Products</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
