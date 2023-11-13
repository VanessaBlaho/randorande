import '../../../scss/_footer.scss'
import { Link  } from "react-router-dom";

export default function Footer (){ 
return (
    <div class="footer">
        <div class="footer-col">
        <ul>
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dates">Dates</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about-Us">About Us</Link></li>
            <li><Link to="/faq">Faq</Link></li>
        
        </ul>
        </div>
  
    <div class="footer-col-contactUs">
      <ul>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li>Follow Us</li>
        <li><a href="#">#</a></li>
        <li><a href="#">#</a></li>
        <li><a href="#">#</a></li>
      </ul>
    </div>
  
    <div class="copyright">&copy; 2023</div>
  </div>
  
)
}

