import React from 'react'
import Payment from './images/payment-30.png'
export default function footer() {
  return (
    <div>

        <div className='footer'>
            <h4 className='signup ' id=''>Sign up & get 20% off on first order</h4>
            <div className='email'>
                <input type='email' className='input' placeholder='Your email address' ></input>
                <div className='right-icon mt-4'>
                    <i class="fa-solid fa-arrow-right" id='right-arrow'></i>
                </div>
            </div>    
            <div className='features'>
                <div className='contact-us'>
                    <p className='l1 fw-bolder fs-4'>Contact Us</p>
                    <p className='l2'>Sector 62, Noida</p>
                    <p className='l2'>+91 9876543210</p>
                    <p className='l2'>Email: contact@fakeapp.com</p>
                    <p className='l2'>08:00 to 20:00</p>
                </div>
                <div className='contact-us'>
                    <p className='l1 fw-bolder fs-4'>Follow Us</p>
                    <p className='l2'><i class="fa-brands fa-facebook-f" id='social'></i>Facebook</p>
                    <p className='l2'><i class="fa-brands fa-twitter" id='social'></i>Twitter</p>
                    <p className='l2'><i class="fa-brands fa-instagram" id='social'></i>Instagram</p>
                    <p className='l2'><i class="fa-brands fa-youtube" id='social'></i>YouTube</p>
                </div>
                <div className='contact-us'>
                    <p className='l1 fw-bolder fs-4'>Information</p>
                    <p className='l2'>Shipping Policy</p>
                    <p className='l2'>Compensation First</p>
                    <p className='l2'>My Account</p>
                    <p className='l2'>Return Policy</p>
                </div>
                <div className='contact-us'>
                    <p className='l1 fw-bolder fs-4'>Customer Care</p>
                    <p className='l2'>Terms of Use</p>
                    <p className='l2'>Payment Methods</p>
                    <p className='l2'>Shipping Guide</p>
                    <p className='l2'>Estimated Delivery Time</p>
                </div>
            </div> 
            <hr className='mt-5'></hr>
            <div className='foots mt-4'>
                <img src={Payment} className='footerimg'></img>
                <p className='footer-text'>Fake Shop © 2022. All Rights Reserved.</p>
            </div>
         </div>
    </div>
  )
}
