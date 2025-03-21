import React from 'react';
import './about.css';

export function About() {
  return (
    <main class="container-fluid bg-secondary text-center">
            <div>
                <div id="picture" class="picture-box"><img src="starry-sky.jpeg" alt="random" /></div>
                
                <p>
                    ConnectFour is a stratagy game where you play against a separate person till one person connects four in vertical, horizontal, 
                    or diagonal sequence. The more people you win against, the greater your score.
                </p>
        
                <p>
                    The name Connect Four is a registered trademark of Hasbro, Inc. Our use of the name and the game is for non-profit
                    educational use only. No part of this code or program should be used outside of that definition.
                </p>
        
                <div id="quote" class="quote-box">
                    <p class="quote">Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering.</p>
                    <p class="author">Master Yoda</p>
                </div>
            </div>
        </main>
  );
}