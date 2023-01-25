import React from 'react'
import "./ContactStyles.css";
export default function Contact() {
  return (
    <div id='contact' className='contact-main'>
        <div className='contact-heading' >
            <p className='my-contact'>CONTACT</p>
            <hr></hr>
            <p>Feel free to contact me</p>
            <div className='contact-form'>
              <div>
                <form action='https://formspree.io/f/xzbwnrry' method='POST'>
                  <input type='text' name = "username" placeholder='Name' autoComplete='off' required></input>
                  <input type='email' name = "email" placeholder='Email' autoComplete='off' required></input>
                  <input type='text' name = "message" placeholder='Message' autoComplete='off' required></input>
                  <button classname = "btn-hire" type="submit" value="send">Submit</button>
                </form>
              </div>
              <br></br>
            </div>
        </div>
    </div>
  )
}
