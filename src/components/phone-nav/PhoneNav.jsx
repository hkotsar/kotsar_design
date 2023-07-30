import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './phone-nav.scss';

function PhoneNav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`overlay overlay__menu  ${isOpen ? 'overlay-active' : 'overlay__menu--hidden'}`} id="overlay">
                <div className="overlay__content">
                    <div className="overlay__heading">
                        <h1>Projektid</h1>
                    </div>
                    <nav className="overlay__nav">
                        <HashLink className="overlay__nav--link" to="/projektid/ux-ui-disain#ux-ui" onClick={toggleMenu}>UX/UI disain</HashLink>
                        <HashLink className="overlay__nav--link" to="/projektid/veebiarendus#dev" onClick={toggleMenu}>Veebiarendus</HashLink>
                        <HashLink className="overlay__nav--link" to="/projektid/sisuhaldus#cms" onClick={toggleMenu}>Sisuhaldussüsteemid</HashLink>
                        <HashLink className="overlay__nav--link" to="/projektid/graafiline-disain#graphic" onClick={toggleMenu}>Graafiline disain</HashLink>
                        <HashLink className="overlay__nav--link" to="/projektid/muud-projektid#other" onClick={toggleMenu}>Muud projektid</HashLink>
                    </nav>
                </div>
            </div>
        
            <div className="phone">
                <nav className="phone__nav">
                    <HashLink to="/#landpage" className="phone__nav--link">
                        <svg className="phone__nav--icon">
                            <use xlinkHref={`../../icons.svg#icon-home`}></use>
                        </svg>
                        <span>Avaleht</span>
                    </HashLink>
                    <HashLink to="/projektid/ux-ui-disain#ux-ui" className="phone__nav--link">
                        <svg className="phone__nav--icon">
                            <use xlinkHref={`../../icons.svg#icon-snippet_folder`}></use>
                        </svg>
                        <span>Projektid</span>
                    </HashLink>
                    <div className="menu__btn">
                        <div className={`menu  ${isOpen ? 'change' : ''}`} id="menu" onClick={toggleMenu}>
                            <div className="menu__bar1"></div>
                            <div className="menu__bar2"></div>
                            <div className="menu__bar3"></div>
                        </div>
                    </div>
                    <HashLink to="/#contact" className="phone__nav--link">
                        <svg className="phone__nav--icon">
                            <use xlinkHref={`../../icons.svg#icon-email`}></use>
                        </svg>
                        <span>Kontakt</span>
                    </HashLink>
                    <HashLink to="/#aboutme" className="phone__nav--link">
                        <svg className="phone__nav--icon">
                            <use xlinkHref={`../../icons.svg#icon-person`}></use>
                        </svg>
                        <span>Minust</span>
                    </HashLink>
                </nav>
            </div>
        </>
    )
}

export default PhoneNav
