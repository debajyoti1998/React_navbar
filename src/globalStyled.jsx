import styled,{createGlobalStyle} from 'styled-components'
const Globalstyle=createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'source sans Pro', sans-serif;
}
`;
export const Container=styled.div`
z-index:0;
width:100%;1300px;
margin-right:auto;
margin-left:auto;
padding-right:50px;
padding-left:50px;
@media screen and (max-width:991px){
    padding-right:30px;
    padding-left:30px;
}

`;
export default Globalstyle