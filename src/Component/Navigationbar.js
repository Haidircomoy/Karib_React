import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import KaribLogo from '../assets/image/Logo.png'

const Navigationbar = () => {
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-navbar'>
            <Container>
            <Nav.Link href="/"><img src={KaribLogo} alt='' className='Logo'/></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
                <ul className='navbar-nav text-uppercase ms-auto py-4 py-lg-0 navbarMenu'>
                    <Nav.Link href="/">Beranda</Nav.Link>
                    <Nav.Link href="#tentangkami">Tentang Kami</Nav.Link>
                    <Nav.Link href="#aktivitas">Aktivitas</Nav.Link>
                    <Nav.Link href="#PI">PI</Nav.Link>
                    <NavDropdown title="Divisi" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#Bisnis">
                        Bisnis
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#Media">Media</NavDropdown.Item>
                    <NavDropdown.Item href="#PSDM">PSDM</NavDropdown.Item>
                    <NavDropdown.Item href="#Sosial">Sosial</NavDropdown.Item>
                    <NavDropdown.Item href="#Syiar">Syiar</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#hubungikami">Hubungi Kami</Nav.Link>
                </ul>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default Navigationbar