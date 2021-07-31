import styled from "styled-components";
// import { container } from "webpack";
import {FaMagento} from 'react-icons/fa';
import { Container } from "../../globalStyled";
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import { RiHome4Fill,RiPhoneFill,RiProductHuntLine} from "react-icons/ri";
import {GrServices } from "react-icons/gr";


export const Nav=styled.nav`
background:#632164;
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
position:sticky;
top:0;
z-index:999;
`

export const NavbarContainer=styled(Container)`
display:flex;
justify-content:space-between;
height:80px;
${Container}
`

export const NavLogo=styled(Link)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items:center;
`;

export const NavIcon=styled(FaMagento)`
margin-right:0.5rem;
`
export const MobileIcon= styled.div`
display:none;
@media screen and (max-width:960px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100,60%);
    font-size:1.8rem;
    cursor:pointer;

    
    
}
`;

// export const BarIcon=styled(FaBars)`
// height:40px;
// width:45px;
// padding-right:10px;

// `
// export const TimeIcon=styled(FaTimes)`
// height:40px;
// width:45px;
// padding-right:10px;

// `
export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:250px;
    height:90vh;
    position:absolute;
    top:60px;
    left:${({click})=>(click ? 0 : '-100%')};
    opacity:1;
    transition:all 0.5s ease;
    background:#101522;
}
`;
export const NavItem=styled.li`
height:80px;
border-buttom:2px solid transparent;
padding-top:40px;
display:flex;
align-items:center;
padding:10px;

&:hover{
    border-buttom:2px solid #4b59f7;
}
@media screen and (max-width:960px){
    width:100%;
    display:flex;
    justify-content:start;
    align-items:center;
    padding:8px 0px 8px 16px;
    list-style:none;
    height:60px;

    &:hover{
        border:none;
}}
`;
export const NavLinks=styled(Link)`
color:green;
display: flex;
align-items: center;
text-decoration:none;
padding:0.5rem 1rem;
height:100%;
&:hover{
    color:yellow;
}

@media screen and (max-width:960px){
    color:red;
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;
    &:hover{
        color:#4b59f7;
        transition:all 0.3s ease;
    }
}
`;
export const HomeButtom=styled(RiHome4Fill)`
height:40px;
width:45px;
padding-right:10px;
color:red;
`
export const ContactButtom=styled(RiPhoneFill)`
height:40px;
width:45px;
padding-right:10px;

`
export const ServiceButtom=styled(GrServices)`
height:40px;
width:45px;
padding-right:10px;

`
export const ProductButtom=styled(RiProductHuntLine)`
height:40px;
width:45px;
padding-right:10px;

`





