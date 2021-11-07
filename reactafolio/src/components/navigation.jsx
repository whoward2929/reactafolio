import React from "react";
import "./navigation.css"

const Navigation = () => {
    return (
        <header>
        <h1>
            <a href="/" >WKH</a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}
<section id="about" class="intro">
            <h2 class="section-title">About Me</h2>
            <div class="flex-row">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae, maxime sit consectetur doloribus nemo earum tempore dicta! Laborum doloremque odit recusandae, veniam fuga labore, nostrum officia deserunt maxime iste ad?
                </p>
            </div>
        </section>

export default Navigation