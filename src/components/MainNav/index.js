import "./index.css"
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.png"

function MainNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width='100' /></Navbar.Brand>
                <Navbar.Toggle className="navtogglebtn" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="NavLinksDiv m-auto">
                        <Nav.Link className="navLinks" href="#features">HOME</Nav.Link>
                        <Nav.Link className="navLinks" href="#pricing">ABOUT</Nav.Link>
                        <Nav.Link className="navLinks" href="#features">Services</Nav.Link>
                        <Nav.Link className="navLinks" href="#pricing">COntact</Nav.Link>
                    </Nav>
                    {/* <Nav className="button_Group">
                        <Button className="btn-1 mx-2" variant="dark">Sign Up</Button>
                        <Button className="btn-2 mx-2" variant="dark">login</Button>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;