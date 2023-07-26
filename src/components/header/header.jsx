import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/header.scss';

// Resources
import IconMenu from '../../assets/svgs/icons/menu';
import IconClose from '../../assets/svgs/icons/close';

export default function Header() {
    // State
    const [state, setState] = useState(false);
    const [screen, setScreen] = useState(false);

    // Effect
    useEffect(() => {
        function handleResponsive() {
            if (window.innerWidth > 900) {
                setState(true);
                setScreen(false);
            } else {
                setScreen(true);
            }
        }
        window.addEventListener('resize', handleResponsive);
        handleResponsive();
        return () => window.removeEventListener('resize', handleResponsive);
    });
    // Methods
    const handleToggle = () => {
        setState(prev => !prev)
    };
    return (
        <header className="header">
            <div className="header-logo">umairansari</div>
            {
                state && 
                <nav className='header-routes'>
                    <Link className='header-routes-link' to={'/'}>Home</Link>
                    <Link className='header-routes-link' to={'/'}>About</Link>
                    <Link className='header-routes-link' to={'/projects'}>Work</Link>
                    <Link className='header-routes-link' to={'/'}>Contact</Link>
                    {
                        screen && <Link className='header-routes-link' to={'/'}>Login</Link>
                    }
                </nav>
            }
            <div className="header-cta">
                <div className="header-cta-btn">Hire me?</div>
                <div className="header-cta-btn">Login</div>
            </div>
            <div className="header-menu" onClick={handleToggle}>
                { state? <IconClose/>:<IconMenu/> }
            </div>
        </header>
    )
}