
import './scss/header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">umairansari</div>
            <nav className='header-routes'>
                <a className='header-routes-link' href="#">Home</a>
                <a className='header-routes-link' href="#">About</a>
                <a className='header-routes-link' href="#">Work</a>
                <a className='header-routes-link' href="#">Contact</a>
            </nav>
            <div className="header-cta">
                <div className="header-cta-btn">Hire me?</div>
            </div>
        </header>
    )
}