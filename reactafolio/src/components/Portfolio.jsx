import React from 'react'

const Portfolio = () => {
    return (
        <>
        {/* //  <div class="portfolio"> */}
        
        <section id="about" class="intro">
            <h2 class="section-title">About Me</h2>
            <div class="flex-row">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae, maxime sit consectetur doloribus nemo earum tempore dicta! Laborum doloremque odit recusandae, veniam fuga labore, nostrum officia deserunt maxime iste ad?
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
