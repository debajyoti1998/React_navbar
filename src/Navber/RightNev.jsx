import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul= styled.ul`
list-style:none;
display:flex;
flex-flow:row nowrap;

li{
    padding:18px 10px ;
    }
@media(max-width:768px){
    flex-flow:column nowrap;
    background-color:red;
    position:fixed;
    top:30px;
    left:0;
    height:100vh;
    width:200px;
    padding-top:3.5rem;
}
`
function RightNev() {
    return (
        <div>
            <Ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Sign up</li>
                <li>Sign Up</li>
            </Ul>
        </div>
    )
}

export default RightNev
