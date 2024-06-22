import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../Contact/Contact.css"
import banner from './contact.jpeg'
import Navbar from "./../../component/Navbar/Navbar"
import Footer from "./../../component/Footer/Footer"

function Contact() {
  return (
    <>
    <Navbar/>
    <h1>.</h1>
    <img className='banner' src={banner}/>
      <h1 className="text-center mt-4 heading ">Contact Us</h1>
      <div className="container-1 rounded mx-auto">
        <div className="row">
          <div className="col-sm-6 col-md-11 col-lg-6  mx-auto">
            <form className="form">

              <div className="mb-3">

                <input type="text" className="form-control border-dark input" id="name" aria-describedby="emailHelp"
                  placeholder="Enter Your Name" required />
              </div>
              <div className="mb-3">

                <input type="email" className="form-control border-dark input" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter Your Email" required />
              </div>
              <div className="mb-3">

                <textarea className="form-control border-dark input" id="exampleFormControlTextarea1" rows="3" placeholder="Message"
                  required></textarea>
              </div>
              <button type="button" className="button  d-block mx-auto m-5 fs-4 "
                onClick={
                  () => {

                    toast.success("Message Sent Successfully!")
                  }
                }>Send Message</button>
            </form>
          </div>
        </div>
        <h2 className="text-center">Keep In Touch</h2>
        <div className="details">
          <p className="text-center icon"><i className="fa-solid fa-location-dot"></i></p>
          <h5 className="text-center ">Address</h5>
          <h6 className="text-center margin"><a href="#" className='spec'>Lokmanya Nagar,
            Hingna Road, Hingna, Nagpur-440016</a></h6>

          <p className="text-center icon"><i className="fa-solid fa-phone"></i></p>
          <h5 className="text-center">Phone</h5>
          <h6 className="text-center margin"><a href="tel:+91 9145724878" className='spec'>+91
            9145724878</a></h6>

          <p className="text-center icon"><i className="fa-solid fa-envelope"></i></p>
          <h5 className="text-center">Email</h5>
          <h6 className="text-center margin"><a href="mailto:suraj@roadtocode.org"
            className='spec' >123@gmail.com</a></h6>


          <h2 className="text-center">Find Us On Map</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0491347895963!2d78.99870237597126!3d21.110607184961143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4951a96eac98f%3A0xcb0a5687fb269529!2sLokmanya%20nagar%20metro%20station!5e0!3m2!1sen!2sin!4v1712824413224!5m2!1sen!2sin" width="100%" height="450" margin="20px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>
      </div>
      <Toaster />
      <Footer/>
    </>
  )
}

export default Contact