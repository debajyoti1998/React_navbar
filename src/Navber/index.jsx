// // rafce
// import React from 'react';
// import {Nav,
//         NavLink,
//         NavMenu ,
//         Bars,
//         NavBtn,
//         NavBtnLink} from './NavberElement';

// const Navber = () => {
//     return (
//         <>
//         <Nav>
//             <NavLink to="/">
//                 <h1>Logo</h1>
//             </NavLink>
//             <Bars/>
//             <NavMenu>
//                 <NavLink to="/about" activestyle>
//                     About
//                 </NavLink>
//                 <NavLink to="/services" activestyle>
//                     Services
//                 </NavLink>
//                 <NavLink to="/contact-us" activestyle>
//                     Contact us
//                 </NavLink>
//                 <NavLink to="/sign-up" activestyle>
//                     Sign up
//                 </NavLink>
//             </NavMenu>
//             <NavBtn>
//                 <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
//             </NavBtn>
//         </Nav>
//         </>
//     )
// }

// export default Navber;


import React from 'react';
import styled from 'styled-components';
import RightNev from './RightNev';

const Nav= styled.nav `
width:100%;
heigth:55px;
border:2px;
padding:0 20px;
display:flex;
justify-content:space-between;
.logo{
    padding:15px;
}



`



function index() {
    return (
        <>
        <Nav>
            <div className="logo">
                NevBar
            </div>
            <RightNev/>
        </Nav>
        </>
    )
}

export default index
