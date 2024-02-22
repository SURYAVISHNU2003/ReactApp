import React from 'react';
import './Home.css';
import Chairslider from './Chairslider';


function Home() {
  return (
    <div>
      <Chairslider />
     <div className="home-container">
      <div className="home-card">
        <h1>Welcome to Modern Chair Studio</h1>
        <p>Discover our premium collection of modern chair designed for comfort and style.</p>
        <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture Showcase" />
      </div>
      <div className="top-right-card">
        <p>"Embrace comfort and style with our chairs - where every seat tells a story of relaxation, elegance, and modern design. Take a seat and let our chairs transform your space into a sanctuary of comfort and sophistication."</p>
      </div>
      <div className="top-left-card">
        <p>
"Experience the pinnacle of ergonomic excellence with our professional-grade chairs. Impeccably designed for comfort and style, our collection seamlessly merges functionality and aesthetics."
</p>
      </div>
      <div>
      <img src="https://images.pexels.com/photos/14024758/pexels-photo-14024758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture Showcase" className="bottom-left-image" />
    </div>
    <div>
      <img src="https://images.pexels.com/photos/12846019/pexels-photo-12846019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture Showcase" className="bottom-right-image" />
    </div>
      </div>
    </div>
    
  )
}
export default Home;
        
        
        
        
        
      
