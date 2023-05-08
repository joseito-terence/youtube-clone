import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup } from 'react-bootstrap'
import { BsYoutube, BsSearch } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

function Header() {
  return (
    <Navbar bg="light" expand="lg"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className='d-flex align-items-center gap-2'>
          <BsYoutube color='#FF0000' size={35} />
          <h1 className='fs-5 mb-0'>
            YouTube
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: '100px', minWidth: '50%' }}
          >
            <Form className='w-100' action='https://www.youtube.com/results'>
              <InputGroup>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  name='search_query'
                  aria-describedby="basic-addon2"
                  style={{ borderRadius: '50rem 0 0 50rem' }}
                />
                <Button type='submit' variant='outline-secondary' style={{ borderRadius: '0 50rem 50rem 0' }}>
                  <BsSearch className='mb-1' />
                </Button>
              </InputGroup>
            </Form>
          </Nav>
          <Nav>
            <Button variant='outline-primary' className='rounded-pill d-flex align-items-center gap-1 fw-bold'>
              <BiUserCircle size={25} />
              Sign in
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
