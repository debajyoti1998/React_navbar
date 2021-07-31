import React from 'react'
import styled from 'styled-components'
const Div=styled.div `
text-align:center;
`
const Input = styled.input `
padding:5px;
margin:5px;
border-radius:10px;
`
const SignIn = () => {
    return (
        <>
        <Div>
            <h1>Sign Up form</h1>
            <Input type="text" placeholder="username"/><br/>
            <Input type="password" placeholder="password" /><br/>
            <button>signin</button>
        </Div>
        </>
    )
}

export default SignIn
