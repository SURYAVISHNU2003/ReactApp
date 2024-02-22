import React from 'react';

function Contact() {
  const contactStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Replace with the actual path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="contact-container" style={contactStyle}>
      <div className='home-container1'>
        <div className="home-card1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px' }}>
          <div align="center">
            <h1 align="center">Contact Us</h1>
            <p>Feel free to reach out to us for any inquiries or questions.</p> <br /><br />
          </div>
          <section class="contact-form">
        <div class="form-container">
            <h2>Your Details</h2>
            <form action="#" method="POST">
 
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" required></input><br/><br /><br />
 
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" required></input><br/><br /><br />
 
                <label for="phone">Phone: </label>
                <input type="tel" id="phone" name="phone"></input><br/><br /><br />
 
                <label for="message">Message: </label>
                <textarea id="message" name="message" rows="4" required></textarea><br/><br /><br />
 
                <button type="submit" class="submit-button">Submit</button>
            </form>
        </div>
    </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
