import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = (e) =>{
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
  return (
    <div className="footer">
      <div className="footer__conatiner">
        <div className="footer__top" onClick={scrollToTop}>
          <p>Back to top</p>
        </div>
        <div className="footer__main">
          <div className="footer__mainKnowSection">
            <h4>Get to Know Us</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>
          <div className="footer__mainContactSection">
            <h4>Facebook</h4>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Press Releases</p>
          </div>
          <div className="footer__mainMoneySection">
            <h4>Make Money with Us</h4>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>
          <div className="footer__mainSalesSection">
            <h4>Let Us Help You</h4>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Amazon Assistant Download</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
