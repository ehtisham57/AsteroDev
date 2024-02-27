import "./index.css"
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.png"
import {NavLink} from 'react-router-dom'

function MainNav() {
    return (
        <Navbar data-aos="fade-down" data-aos-duration="1500"
        collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width='100' alt='image'/></Navbar.Brand>
                <Navbar.Toggle className="navtogglebtn" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="NavLinksDiv m-auto">
                        <NavLink className="navLinks" to="/">HOME</NavLink>
                        <NavLink className="navLinks" to="/About">ABOUT</NavLink>
                        <NavLink className="navLinks" to="/Services">Services</NavLink>
                        <NavLink className="navLinks" to="/Contact">Contact</NavLink>
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