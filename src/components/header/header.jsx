

import logo from '../../assets/images/logo.png';

import './scss/header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="umairansari-logo" />
            </div>
            <nav className='header-routes'>
                <a className='header-routes-link' href="#">Home</a>
                <a className='header-routes-link' href="#">About</a>
                <a className='header-routes-link' href="#">Work</a>
                <a className='header-routes-link' href="#">Contact</a>
            </nav>
            <div className="header-cta">
                <div className="header-cta-btn">Hire me?</div>
                <div className="header-cta-btn">Login</div>
            </div>
        </header>
    )
}