// import react,{useState} from 'react';
// import styled from 'styled-components';

// const Button=styled.button `
// color:${(props)=>(props.isvalid ? 'green' : 'red')};
// background:${(props)=>(props.isvalid ? 'yellow' : 'orange')};
// padding:5px;
// border-radius:20px;
// display: flex;
// flex-wrap: wrap;
// align-items: center;
// justify-content: center;
// `
// const H1=styled.h1 `
// border:2px solid black;
// display: flex;
// flex-wrap: wrap;
// align-items: center;
// justify-content: center;
// `

// const App=()=>{
//   const [add,setAdd]=useState(0)
//   const zero=()=>{
//     setAdd(add+1)
//   }
//   return(
//     <>
//     <H1>hello {add}</H1>
//     <Button onClick={zero} isvalid={true}>Add</Button>
//     </>
//   )
// }
// export default App;

import React from 'react';
// import Navber from './Navber';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import { Navbar } from './Component';
import Product from './Product';
import Home from './Home';
import Service from './Service';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/service"  component={Service}/>
          <Route exact path="/product"  component={Product}/>

        </Switch>

      </Router>
      
    </div>
  )
}

export default App
