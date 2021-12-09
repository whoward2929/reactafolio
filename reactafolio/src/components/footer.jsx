import React from "react";
import LI from '../assets/LI.png'
import GHL from '../assets/GHL.png'
function Footer() {
  return (
    <footer>
            <h2>© Will Howard</h2>
            <div class="footer-flex">
                {/* <!--  Linkedin Link --> */}
                <a href="https://www.linkedin.com/in/william-howard-160187b2/" target="_blank" rel="noreferrer">
                    {/* <!-- https://brand.linkedin.com/downloads--> */}
                    <img src={LI} alt="Linkedin logo." style={{height:"50.34px", width: "50.34px"}}/>
                </a>
                {/* <!-- https://github.com/logos for Logo download --> */}
                <a href="https://github.com/whoward2929" target="_blank" rel="noreferrer">
                    {/* <!-- https://www.freepnglogos.com/images/512x512-logo-27148.html --> */}
                    <img src={GHL} class="github" alt="Github." style={{height:"50.34px", width: "50.34px"}}/>
                </a>
            </div>
        </footer>
    
  );
}

export default Footer;

