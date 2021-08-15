import React from 'react';
import arkademiLogo from '../../assets/images/Asset 4.png'
import searchIcon from '../../assets/images/loupe.png'
import shopingIcon from '../../assets/images/shopping-basket.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'


const index = () => {
    return (
        <div style={{margin:'10px'}}>
          <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand href="#home"><img src={arkademiLogo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <div style={{background: '#FFFFFF', border: '3px solid rgba(81, 96, 140, 0.0992406)',boxSizing: 'border-box',borderRadius: '8px'}}>
                  <input style={{border:'none', padding:'5px',color:'white',margin:'auto' }} placeholder='Cari kursus' type='text'/>
                  <img src={searchIcon} style={{marginRight:'5px'}}/>
                </div>                
              </Nav>
              <Nav>
                <Nav.Link href="#deets"><h4 style={{fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '500',fontSize: '14px'}}>Kategori</h4></Nav.Link>
                <Nav.Link href="#deets"><h4 style={{fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '500',fontSize: '14px'}}>Mitra</h4></Nav.Link>
                <Nav.Link href="#"><h4 style={{fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '500',fontSize: '14px'}}>Tentang</h4></Nav.Link>
                <Nav.Link href="#deets">  <img src={shopingIcon} width='10px' height='10px' style={{marginRight:'5px'}}/></Nav.Link>
              </Nav>
              <h5 style={{color:'lightgrey'}}>|</h5>
              <Nav>
                <Nav.Link href="#deets"><button style={{fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',height:'40px',width:'90px',color:'#1C1D20',background:'none',border: '0.5px solid rgba(28, 29, 32, 0.203589)',boxSizing: 'border-box',boxShadow: '0px 5px 5px rgba(28, 29, 32, 0.0485686)',borderRadius: '7px'}}>Masuk</button></Nav.Link>
                <Nav.Link href="#deets"><button style={{fontFamily: 'Montserrat, sans-serif',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',height:'40px',width:'90px',color:'#fff',background:'#0872C7',border: '0.5px solid rgba(28, 29, 32, 0.203589)',boxSizing: 'border-box',boxShadow: '0px 5px 5px rgba(28, 29, 32, 0.0485686)',borderRadius: '7px'}}>Daftar</button></Nav.Link>
               </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default index;