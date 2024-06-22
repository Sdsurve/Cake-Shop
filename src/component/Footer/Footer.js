
import logo from "./logo2.png"
import './Footer.css';
import gmail from "./../Footer/footer-icon/gmail.png"
import facebook from "./../Footer/footer-icon/facebook.png"
import twitter from "./../Footer/footer-icon/twitter.png"
import google from "./../Footer/footer-icon/google.png"
import { Link } from 'react-router-dom';


function Footer() {
    return (<>

        <div className="footer">
            <div className="footer-desc">
                <div className="footer-img">
                    <img src={logo} className="img" />
                </div>

                <div className="quick-links">
                    <span><b><u>Quick Links</u></b></span>
                    <Link to="/" className="links"> Home   </Link>
                    <Link to="/product" className="links"> Product </Link>
                    <Link to="/about" className="links"> About   </Link>
                    <Link to="/contact" className="links"> Contact </Link>
                
                </div>

                <div className="useful-links">
                    <span><b><u>Usefull Links</u></b></span>
                    <span>Privacy Policy</span>
                    <span>Terms And conditions</span>
                    
                    <span>Support</span>
                    <span>FAQ</span>
                </div>

                <div className="contact">
                  <p><b>CONTACT</b></p>
                  <Link className="address" to={'https://www.google.co.in/maps/place/Hingna+Rd,+Lokmanya+Nagar,+Nagpur,+Maharashtra/@21.1057331,78.9912897,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c07495e50567:0x8c629f2d92b69b17!8m2!3d21.1057281!4d78.9938646!16s%2Fg%2F1hf3bd3rv?entry=ttu'}> 
                    <span> Lokmanya Nagar,
                    Hingna Road, Hingna, Nagpur-440016</span>
                    </Link> 
               

                    <div>
                       <Link to={'https://mail.google.com/mail/'}><img src={gmail} className='footer-icon' /></Link> 
                       <Link to={'https://www.facebook.com/'}><img src={facebook} className='footer-icon' /></Link> 
                       <Link to={'https://x.com/?lang=en-in'}><img src={twitter} className='footer-icon' /></Link> 
                       <Link to={'https://www.instagram.com/?utm_source=pwa_homescreen'}><img src={google} className='footer-icon' /></Link> 
                    </div>
                </div>
                </div>
                </div>
                

            </>  )
}

            export default Footer