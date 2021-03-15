import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                    >
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                    </svg>
                    <strong>Prekių sąrašas</strong>
                </Link>
                <Link to="/about" className="navbar-brand d-flex align-items-center"><strong>About</strong></Link>
                <Link to="/contact" className="navbar-brand d-flex align-items-center"><strong>Contact</strong></Link>
            </div>
        </div>
    );
}
