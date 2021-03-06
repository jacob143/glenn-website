import React, {useState} from 'react'; 
import { FaBars, FaTimes} from 'react-icons/fa'; 
import { IconContext } from 'react-icons/lib';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  } from './Navbar.elements'; 

  

const Navbar = () => {
  const[click, setClick] = useState(false)

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false); 

  return (
    <>
    <IconContext.Provider value = {{ color: '#fff'}} >
      <Nav> 
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon/>
            GLU
          </NavLogo>
          <MobileIcon onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to ='/'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ='/about'>
                About 
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ='/contact'>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar; 
