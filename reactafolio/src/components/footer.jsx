import React from "react";

function Footer() {
  return (
    <footer>
            <h2>© Will Howard</h2>
            <div class="footer-flex">
                {/* <!--  Linkedin Link --> */}
                <a href="https://www.linkedin.com/in/william-howard-160187b2/" target="_blank">
                    {/* <!-- https://brand.linkedin.com/downloads--> */}
                    <img src="./assets/images/LI-Logo.png" alt="Linkedin logo."/>
                </a>
                {/* <!-- https://github.com/logos for Logo download --> */}
                <a href="https://github.com/whoward2929" target="_blank">
                    {/* <!-- https://www.freepnglogos.com/images/512x512-logo-27148.html --> */}
                    <img src="./assets/images/GitHub-Mark-Light-120px-plus.png" class="github" alt="Github." />
                </a>
            </div>
        </footer>
    
  );
}

export default Footer;

