import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <table>
  <tr>
   <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMh-phnz2XntJD5O7o6_vHssJQlAjfL_fEHF6qFi9vHx8O3LXFe_b3n4RnhFw2XwN7o8Y&usqp=CAU' height='140'/></td>
      <td align='center'><h1 style={{color:'purple'}}>MODERN&nbsp;&nbsp;CHAIR&nbsp;&nbsp;STUDIO</h1></td>
      <td style={{paddingRight:'160px'}}><div class="topnav">
        <h3><Link to="/Home">Home</Link>
        <Link to="/Menu">Shop</Link>
        <Link to="/Service">Service</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link></h3>
      </div></td>
      </tr>
      </table>
    </header>
  
  )
}

export default Header;
