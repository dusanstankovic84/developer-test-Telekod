import React from 'react';
import './Footer.css';

// footer

export const Footer = () => {
    return (
            <>
            <div className="footer-image">
                <img src={process.env.PUBLIC_URL + "/footer.svg"} alt="" />
            </div>
        <footer className="footer">
            <div className="container">
                <span className="text-muted">&copy; Telekod Plus doo 2021 </span>
            </div>
        </footer>
        </>
    )
}