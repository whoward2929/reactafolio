import React from 'react'
import Betsboard from '../assets/Betsboard.png'
import PWG from '../assets/PWG.png'
import PF from '../assets/PF.png'
const Portfolio = () => {
    return (
        <>
        {/* //  <div class="portfolio"> */}
        
        <section id="about" class="intro">
            <h2 class="section-title"></h2>
            <div class="flex-row">
                <p>
                I am a Full Stack Web Developer with a passion for developing exceptional online user experiences.I Earned a certificate in full stack web development through the University of Central Florida. I have worked with both frontend and backend technologies such as: HTML, CSS, JavaScript, Node.js, and React. I am great at learning new technologies quickly and excel in fast paced, collaborative work environments.
                </p>
            </div>
        </section>

        
        <section id="work" class="work">
            <h2 class="section-title-2"></h2>
            <div class="flex-row">
                <div class="Project">
                    <a href="https://whoward2929.github.io/password-generator/" target="_blank" rel="noreferrer" >
                    
                    <div class="Project-text">
                        <h3>Password Generator</h3>
                        <img src={PWG} alt="placeholder"/>
                        <p>Randomizing passwords through code</p>
                    </div>
                    </a>
                </div>
                <div class="My first website">
                    <img src={PF} alt="placeholder" style={{height: "150px"}}/>

                    
                    <div class="Project-text">
                        <h3>My First Website</h3>
                        <p>Pink Floyd Fanpage</p>
                    </div>
                </div>
                <div class="Project">
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                        <img src="" alt="placeholder"/>
                    </a>
                    <div class="Project-text">
                        <h3>Next Code Project</h3>
                        <p>Additional Fact</p>
                    </div>
                </div>
                <div class="Project">
                    <a href="https://gracekevin.github.io/Betsboard/" target="_blank" rel="noreferrer">
                        <img src={Betsboard} alt="Bestboard"/>
                    </a>
                    <div class="Project-text">
                        <h3>Group Project</h3>
                        <p>Front End Styled Webpage for stock market research based on the subreddit Wallstreetbets popular stocks</p>
                    </div>
                </div>
                <div class="Project">
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                        <img src="./assets/images/placeholderphoto.jpeg" alt="placeholder"/>
                    </a>
                <div class="Project-text">
                    <h3>lorem ipsum</h3>
                    <p>lorem ipsum</p>
                </div>
            </div>
            </div>
        </section>
          </>  
        
    )
}

export default Portfolio
