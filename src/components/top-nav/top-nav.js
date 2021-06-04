import React, { useEffect } from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import Resume from '../../images/MK-Resume-Jun-2021.pdf';
// import Hamburger from 'hamburger-react'

export function TopNav() {

    // const menu_btn = document.querySelector('.hamburger');
    // const mobile_nav = document.querySelector('.mobile-nav');

    // const [isOpen, setOpen] = useState(false)

    // window.onload = function () {

    //     const menu_btn = document.querySelector('.hamburger');
    //     const mobile_nav = document.querySelector('.mobile-nav');

    //     menu_btn.addEventListener('click', function () {
    //         menu_btn.classList.toggle('is-active');
    //         mobile_nav.classList.toggle('is-active');
    //     })

    // }

    useEffect(() => {

        const menu_btn = document.querySelector('.hamburger');
        const mobile_nav = document.querySelector('.mobile-nav');

        menu_btn.addEventListener('click', function () {
            menu_btn.classList.toggle('is-active');
            mobile_nav.classList.toggle('is-active');
        });
    });

    return (
        <>
            <header>
                <div className="logo-container">
                    <Link className="logo" to='/'>
                        <h1>MK</h1>
                    </Link>
                </div>
                <div>
                    <nav className="desktop-nav">
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/projects">
                            Projects
                        </Link>
                        <a href="https://github.com/mknowlton89" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/michael-knowlton-81b0b15a/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
                        <Link to="/contact">
                            <button className="btn contact-button">Contact</button>
                        </Link>
                    </nav>
                    <button className="hamburger">
                        <div className="bar"></div>
                    </button>
                </div>
            </header>
            <nav className="mobile-nav">
                <Link to="/">
                    Home
                        </Link>
                <Link to="/projects">
                    Projects
                        </Link>
                <a href="https://github.com/mknowlton89" target="_blank" rel="noreferrer">GitHub</a>

                <a href="https://www.linkedin.com/in/michael-knowlton-81b0b15a/" target="_blank" rel="noreferrer">LinkedIn</a>

                <a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
                <Link to='/contact'>
                    <button className="btn mobile-button">Contact</button>
                </Link>
            </nav>
        </>
    )
}