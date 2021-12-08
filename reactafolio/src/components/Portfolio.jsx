import React from 'react'

const Portfolio = () => {
    return (
        <>
        {/* //  <div class="portfolio"> */}
        
        <section id="about" class="intro">
            <h2 class="section-title">About Me</h2>
            <div class="flex-row">
                <p>
                Full Stack Web Developer with a passion for developing exceptional online user experiences. Earned a certificate in full stack web development through the University of Central Florida. Proficient in both frontend and backend technologies such as: HTML, CSS, JavaScript, Node.js, and React. Great at learning new technologies quickly and excel in fast paced, collaborative work environments.
                </p>
            </div>
        </section>

        
        <section id="work" class="work">
            <h2 class="section-title-2">Completed Projects</h2>
            <div class="flex-row">
                <div class="Project">
                    <a href="https://whoward2929.github.io/password-generator/" target="_blank" rel="noreferrer" >
                    
                    <div class="Project-text">
                        <h3>Password Generator</h3>
                        <p>Randomizing passwords through code</p>
                    </div>
                    </a>
                </div>
                <div class="Project">
                    <a href="www.google.com" target="_blank" rel="noreferrer">
                        <img src="./assets/images/itadori.jpeg" alt="placeholder"/>
                    </a>
                    <div class="Project-text">
                        <h3>lorem ipsum</h3>
                        <p>lorem ipsum</p>
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
                        <img src="./assets/images/BetsBoard.png" alt="Bestboard"/>
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
