import React from 'react'; 
import  { Navbar,Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Navbarlist = () => {
  const amount = useSelector(state => state.amount)
  return <>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Bank Of BTC</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
       
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item> 
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>




      <Button className='btn-primary' disabled={true} > Your balance:{amount}</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
}

export default Navbarlist