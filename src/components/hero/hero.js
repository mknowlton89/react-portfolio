import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import HeroImage from '../../images/hero.png';

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Hi, my name is Michael.</h1>
                <p>I'm a fullstack software developer based in Atlanta. I'm currently open to new opportunities. Check
                    out some of my recent projects below.</p>
                <Link to="/projects">
                    <button className="btn">
                        View Projects
                    </button>
                </Link>
            </div>
            <div className="hero-right">
                <img src={HeroImage} alt="Michael Knowlton's Headshot" />
            </div>
        </div>
    )
}