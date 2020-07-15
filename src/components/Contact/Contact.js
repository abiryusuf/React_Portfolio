import React from 'react';

const Contact = () => {
  return (
  <main id="contact">
    <h1 className="lg-heading">
      Contact <span className="secondary-color">Me</span>
    </h1>
    <div className="container">  
      <form name="contactForm" id="contact" method="POST" data-netlify="true">
        <fieldset>
          <input placeholder="Your name" type="text" id="name" name="name" tabIndex="1" required autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" id="email" name="email" tabIndex="2" required />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your message here...." tabIndex="5" id="message" name="message" required></textarea>
        </fieldset>
        <fieldset>
          <button type="submit" id="contact-submit">Submit</button>
        </fieldset>
      </form>
    </div>
  </main>
  );
}

export default Contact;