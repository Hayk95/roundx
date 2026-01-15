"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import ThemeToggle from './UI/ThemeToggle';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className='header-content'>
                <Link href={'/'} className='header-logo-link'>
                    <div className='header-logo'>
                        <img src='/logo.png' alt='RoundX Transport' />
                    </div>
                </Link>

                <nav className='header-nav'>
                    <div className='header-actions'>
                        <ThemeToggle />
                        <Link className={'header-phone-btn'} href={'tel:+18182338475'}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <span className="phone-text">(818) 233-8475</span>
                        </Link>
                        <Link className={'header-cta-btn'} href='/quote'>
                            <span>Get Free Quote</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
