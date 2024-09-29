import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="/">Tra My</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>Tra My</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/user" className='nav-link'>User</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}> Log in </button>
                        <button className='btn-singup'> Sign up </button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Log in</NavDropdown.Item>
                            <NavDropdown.Item >Log out</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Version
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;