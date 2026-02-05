import React, { useState, useEffect } from 'react';
import "./navbar.css"


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.glass-nav');
            if (nav) {
                if (window.scrollY > 20) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar glass-nav navbar-expand-lg fixed-top">
            <div className="container-fluid px-4 px-lg-5">
                {/* Brand / Logo */}
                <a className="navbar-brand fw-bold fs-4" href="#/">
                    <img
                        src="./img/Logo1.png"
                        alt="Portfolio Logo"
                        style={{ width: '80px' }} // fixed width for visibility
                    />
                </a>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbarContent"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible menu */}
                <div
                    className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                    id="navbarContent"
                >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-4">
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    {/* Buttons on right */}
                    <div className="d-flex align-items-center gap-3">
                        <a href="#get-started" className="btn btn-primary btn-sm px-4 rounded-pill shadow-sm text-dark">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
