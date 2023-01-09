import {BrowserRouter,Route,Routes}from "react-router-dom";

import './App.css'
import Proporti from './Proporti/Proporti'
import About from './About/About'
import Home from './Home/Home'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Reviews from './Reviews/Reviews'
import Submit from './Submit/Submit'
import Login from "./Login/Login";
const App = () => {
  return (
   <>
   
<BrowserRouter>
<Routes>
<Route path="/" exact element= {<div><Header /><Home /><About /><Reviews /><Submit /><Proporti /><Footer /> </div>
   } />
   <Route path="/Login" exact element= {<Login />} />
</Routes>
</BrowserRouter>
   
        </>
        )
        }
       
        export default App

     
