import React, { useState } from 'react';
import {Nav,
        NavbarContainer,
        NavLogo,
        NavIcon,
        MobileIcon,
        BarIcon,
        TimeIcon,
        NavMenu,
        NavItem,
        NavLinks,
        HomeButtom,
        ContactButtom,
        ServiceButtom,
        ProductButtom} from './Navbar.element';
import {FaBars,FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';




function Navbar() {
    const [click,setClick]=useState(false)
    const handleclick=()=>{
        setClick(!click)
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    ULTRA
                </NavLogo>
                <MobileIcon onClick={handleclick}>{click ? <FaTimes/> :<FaBars/ >}</MobileIcon>
                <NavMenu  onClick={handleclick} click={click}>
                    <NavItem>
                        <NavLinks to='/home'>
                            <HomeButtom/>
                            Home</NavLinks>
                    </NavItem>
                
                    <NavItem>
                        <NavLinks to='/service'><ServiceButtom/>Service</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/product'><ProductButtom/>Product</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/contact'>
                            <ContactButtom/>Contact us
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
            
        </>
    );
};

export default Navbar
