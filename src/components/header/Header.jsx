import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './header.scss';


const Header = () => {
  return (
    <>
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <h3>Kotsar Design</h3>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <HashLink to="/#landpage" className="nav__item--link">Avaleht</HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="/#aboutme" className="nav__item--link">Enesetutvustus</HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="/projektid/ux-ui-disain#ux-ui" className="nav__item--link">Projektid</HashLink>
                        </li>
                    </ul>
                </nav>
                <div className="header__contact">
                    <HashLink to="/#contact" className="btn btn__contact">
                        <svg class="btn__contact--icon">
                            <use xlinkHref="../../icons.svg#icon-mail_outline"></use>
                        </svg>
                        <span>Võta ühendust</span>
                    </HashLink>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
