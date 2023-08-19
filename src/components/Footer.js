import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <Container fluid className='justify-content-center'>
        <Navbar
          className='flex-column'
          expand='lg'
          bg='light'
          variant='light'
          fixed='bottom'
        >
          <h5>REACT23K</h5>
          <Navbar.Text>&copy; 2023 Fit Vista. All Rights Reserved.</Navbar.Text>
        </Navbar>
      </Container>
    </footer>
  );
};

export default Footer;
