import React from 'react';
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Home from './Components/Home';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Login from './Components/Login';
import Chairslider from './Components/Chairslider';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
