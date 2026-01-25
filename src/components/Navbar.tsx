// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
                <a className="navbar-brand fw-bold fs-4" href="#">
                    <span className="" > 
                        <img src="/public/img/portfolioLogo.png" alt="Portfolio Logo" style={{width:"4vw"}} />
                    </span>
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

                {/* Collapsible content */}
                <div
                    className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                    id="navbarContent"
                >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1 gap-lg-4">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Right side buttons */}
                    <div className="d-flex align-items-center gap-3">
                        <a href="#" className="btn btn-outline-light btn-sm px-4 rounded-pill">
                            Log in
                        </a>
                        <a
                            href="#"
                            className="btn btn-primary btn-sm px-4 rounded-pill shadow-sm"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;