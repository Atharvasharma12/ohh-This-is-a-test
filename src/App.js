import './App.css';
// import { useState } from 'react';
import NavBar from './Header';
import Home from './HomeSection';
import SignIn from './SignIn';
import {Route, Routes} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import SignUp from './SignUp';
import Material from './Material';






function App() {
  


 


  return (
    
    <>

    <NavBar count/>
     <div>

      <Routes>
        <Route  path='/HomeSection' element = {<Home />}></Route>
        <Route path='/SignIn' element = {<SignIn/>}></Route>
        <Route path='/Page1' element = {<Page1/>}></Route>
        <Route path='/Page2' element = {<Page2/>}></Route>
        <Route path='/Page3' element = {<Page3/>}></Route>
        <Route path='/SignUp' element = {<SignUp/>}></Route>
        <Route path='/Material' element = {<Material/>}></Route>

      </Routes> 
   
     </div>
     
    </>
      
  );
}

export default App;