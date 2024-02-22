import React from 'react'
import { Icon } from 'semantic-ui-react';
function Footer() {
  return (
    <div>
        <div className='footercolor'>  
<table>
  <tr>
   <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMh-phnz2XntJD5O7o6_vHssJQlAjfL_fEHF6qFi9vHx8O3LXFe_b3n4RnhFw2XwN7o8Y&usqp=CAU'/></td>
  <td><h2 style={{color:'purple',position:'relative',left:'100px'}}>MODERN CHAIR STUDIO</h2></td>
  <td className='footer1'>
    <div align='center'>
  <h2 style={{color:'purple'}}>CONTACT US  </h2>
          <Icon disabled name='mail'/> modernchairstudio@gmail.com <br />
          <Icon disabled name='phone'/> 9998887776 <br />
          <h2 style={{color:'purple'}}>FOLLOW US</h2>
          <Icon disabled name='facebook'/>
          <Icon disabled name='instagram'/>
          <Icon disabled name='twitter'/>
          </div>
  </td>
  <td>
  <div className='location'>
            <td><h2 style={{color:'purple'}}>LOCATION</h2></td><br/>
            <td><label><Icon disabled name='location arrow' style={{position:'relative',right:'220px'}}/>1/135A,North Street,<br/>
            Gandhipuram,Coimbatore(Dt)<br/>
            641012</label></td>
            
          </div>
  </td>
  </tr>
</table>

        </div>
        
        <footer align="center">&copy; 2023 Modern Chair Studio. All rights reserved.</footer>
        </div>
  )
}

export default Footer;
