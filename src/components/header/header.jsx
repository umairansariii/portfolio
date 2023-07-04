import { useState, useEffect } from 'react';

import './scss/header.scss';
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
                    <a className='header-routes-link' href="#">Home</a>
                    <a className='header-routes-link' href="#">About</a>
                    <a className='header-routes-link' href="#">Work</a>
                    <a className='header-routes-link' href="#">Contact</a>
                    {
                        screen && <a className='header-routes-link' href="#">Login</a>
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