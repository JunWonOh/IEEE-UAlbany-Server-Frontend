import React, { useState } from 'react'
import '../css/pages/home.css'
import '../css/pages/dashboard.css'
import Navigation from '../components/navigation'
import pnf from '../images/404.gif'

export default function PageNotFound() {

    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("load", reveal);

    return (
        <div>
            <Navigation></Navigation>
            <div className="offset">
                <section id="instructions">
                    <div className="success flex-container">
                        <div className="container image">
                            <div className="center">
                                <div className="frame-celeb">
                                    <img src={pnf} alt="404.gif"></img>
                                </div>
                            </div>
                        </div>
                        <div className="container text">
                            <div className="center reveal">
                                <h1 className="pnf">404</h1>
                                <p>Page not found :(</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}